import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { Elements } from "@stripe/react-stripe-js";
import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import CheckoutForm from "../component/stripe/Checkout";
const stripe = loadStripe(
  "pk_test_51Md4qEBP7VrxYAkmDatZw6f9xUi9GQWQUl9Gs8D2W44tmQ4tfR6ReZ3Jo3Y6B5yFbcPxClV1IMzziL4hectpsOJ000Jd7aJVPi",
);

export default function Subscribe() {
  const router = useRouter();

  return (
    <div>
      <Elements
        stripe={stripe}
        options={{ clientSecret: router.query.clientSecret as string }}
      >
        <CheckoutForm />
      </Elements>
    </div>
  );
}
