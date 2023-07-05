import { Resolver, Mutation, Arg, Args, Query } from "type-graphql";
import Stripe from "stripe";
import { priceInput } from "../inputs/PriceInput";
import { subscriptionInput } from "../inputs/SubscriptionInput";
import { PaymentIntentInput } from "../inputs/PaymentIntentInput";
import { PrismaClient } from "@prisma/client";
import { subscription } from "../responses/SubscriptionResponse";
import { ProductResponse } from "../responses/ProductResponse";
const prisma = new PrismaClient();

type Price = {
  id: string;
  currency: string;
  type: string;
  unit_amount: number;
  interval: string;
  unit_amount_decimal: string;
};
interface Plan {
  id: string;
  name: string;
  description: string;
  prices: Price[];
}
type Interval = "day" | "month" | "week" | "year";
const stripe = new Stripe(
  "",
  {
    apiVersion: "2022-11-15",
  },
);

const DOMAIN = "http://localhost:3000/";
Resolver();
export class PaymentResolver {
  @Mutation(() => String)
  async checkout(): Promise<string> {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "T-shirt",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${DOMAIN}payment`,
    });
    return session.url;
  }

  @Mutation(() => String)
  async initializePayment(
    @Arg("input") input: PaymentIntentInput,
  ): Promise<string> {
    const paymentIntient = await stripe.paymentIntents.create({
      amount: input.amount,
      currency: input.currency,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return paymentIntient.client_secret;
  }

  @Mutation(() => String)
  async createProduct(@Arg("name") name: string): Promise<string> {
    const newProduct = await stripe.products.create({
      name,
    });

    await prisma.product.create({
      data: {
        name: newProduct.name,
        productId: newProduct.id,
      },
    });
    return newProduct.id;
  }

  @Mutation(() => String)
  async createPrice(
    @Arg("input")
    input: priceInput,
  ): Promise<string> {
    const newPrice = await stripe.prices.create({
      product: input.productId,
      unit_amount: input.amount,
      currency: "usd",
      recurring: {
        interval: input.interval as Interval,
      },
    });

    await prisma.price.create({
      data: {
        priceId: newPrice.id,
      },
    });
    return newPrice.id;
  }

  @Mutation(() => subscription)
  async createSubscription(
    @Arg("input") input: subscriptionInput,
  ): Promise<subscription> {
    const newSubscription = await stripe.subscriptions.create({
      customer: input.customerId,
      items: [
        {
          price: input.priceId,
        },
      ],
      payment_behavior: "default_incomplete",
      payment_settings: { save_default_payment_method: "on_subscription" },
      expand: ["latest_invoice.payment_intent"],
    });
    const invoice = newSubscription.latest_invoice as Stripe.Invoice;
    const intent = invoice.payment_intent as Stripe.PaymentIntent;
    return {
      subscriptionId: newSubscription.id,
      clientSecret: intent.client_secret,
    };
  }

  @Mutation(() => String)
  async createCustomer(
    @Arg("email") email: string,
    @Arg("name") name: string,
  ): Promise<string> {
    const newCustomer = await stripe.customers.create({
      email,
      name,
    });
    return newCustomer.id;
  }

  @Query(() => ProductResponse)
  async retriveProducts(): Promise<ProductResponse> {
    const plans: Plan[] = (
      await stripe.products.list({ active: true })
    ).data.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description ?? "hello",
        prices: [],
      };
    });

    if (plans) {
      for (let i = 0; i < plans.length; i++) {
        plans[i].prices = (
          await stripe.prices.list({ product: plans[i].id })
        ).data.map((price) => {
          return {
            id: price.id,
            currency: price.currency,
            type: price.type,
            interval: price.recurring.interval,
            unit_amount: price.unit_amount,
            unit_amount_decimal: price.unit_amount_decimal,
          };
        });
      }
    }

    return { total: plans.length, products: plans };
  }
}
