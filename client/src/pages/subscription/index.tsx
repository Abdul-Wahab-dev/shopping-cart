import { useState } from "react";
import { useRetriveProductsQuery } from "../../api/schema/queries/queries.generated";
import { useRouter } from "next/router";
import { useCreateSubscriptionMutation } from "@/api/schema/mutation/mutations.generated";

import "./asset/index.css";
export default function Subscription() {
  const [interval, setInterval] = useState("month");
  const { data, error, loading } = useRetriveProductsQuery();
  const router = useRouter();
  const [createSubscription, { data: subscriptionData }] =
    useCreateSubscriptionMutation({
      onCompleted(data, clientOptions?) {
        router.push({
          pathname: "/subscription/PayNow",
          query: { clientSecret: data.createSubscription.clientSecret },
        });
      },
    });

  console.log(data?.retriveProducts.products);

  const handleSubscription = (price) => {
    createSubscription({
      variables: {
        input: {
          priceId: price.id,
          customerId: "cus_NWsPU16EvOJaLR",
        },
      },
    });
  };

  return (
    <div className="flex items-center justify-center w-screen dir-col">
      <h1>Subscription</h1>
      <ul>
        <li
          className={interval === "month" ? "btn active" : "btn"}
          onClick={() => setInterval("month")}
        >
          month
        </li>
        <li
          className={interval === "year" ? "btn active" : "btn"}
          onClick={() => setInterval("year")}
        >
          year
        </li>
      </ul>
      <div className="flex items-center justify-center gap-4">
        {data?.retriveProducts.products.map((product) => (
          <div className="item" key={product.id}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>
              {" "}
              {
                product.prices.find((price) => price.interval === interval)
                  ?.unit_amount
              }{" "}
              /{" "}
              {
                product.prices.find((price) => price.interval === interval)
                  ?.interval
              }{" "}
            </p>
            <button
              className="btn btn-primary"
              onClick={() =>
                handleSubscription(
                  product.prices.find((price) => price.interval === interval),
                )
              }
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
