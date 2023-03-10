import { Resolver, Mutation, Arg, Args } from "type-graphql";
import Stripe from "stripe";
import { priceInput } from "../inputs/PriceInput";
import { subscriptionInput } from "../inputs/SubscriptionInput";
import { PaymentIntentInput } from "../inputs/PaymentIntentInput";
type Interval = "day" | "month" | "week" | "year";
const stripe = new Stripe(
  "sk_test_51Md4qEBP7VrxYAkm6VP0sQHd8fQ0PXFhbD4QTwmJFEBSBRRpkbI7gNJK0LWY1FfHylYiEsojkOPycfgGdKdAXDR000jaCtvkKN",
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
    return newPrice.id;
  }

  @Mutation(() => String)
  async createSubscription(
    @Arg("input") input: subscriptionInput,
  ): Promise<string> {
    const newSubscription = await stripe.subscriptions.create({
      customer: input.customerId,
      payment_behavior: "default_incomplete",
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      items: [
        {
          price: input.priceId,
        },
      ],
    });

    return "";
  }

  @Mutation(() => String)
  async createCustomer(@Arg("email") email: string): Promise<string> {
    const newCustomer = await stripe.customers.create({
      email,
    });
    return newCustomer.id;
  }
}
