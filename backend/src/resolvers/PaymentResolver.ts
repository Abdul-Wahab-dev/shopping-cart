import { Resolver, Query } from "type-graphql";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51Md4qEBP7VrxYAkm6VP0sQHd8fQ0PXFhbD4QTwmJFEBSBRRpkbI7gNJK0LWY1FfHylYiEsojkOPycfgGdKdAXDR000jaCtvkKN",
  {
    apiVersion: "2022-11-15",
  },
);

const DOMAIN = "http://localhost:3000/";
Resolver();
export class PaymentResolver {
  @Query(() => String)
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
      success_url: `${DOMAIN}thanks`,
    });
    return session.url;
  }
}
