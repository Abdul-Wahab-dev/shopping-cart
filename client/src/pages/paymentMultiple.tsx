import { useCheckoutMutation } from "../api/schema/mutation/mutations.generated";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./component/stripe/Checkout";
const stripe = loadStripe(
  "pk_test_51Md4qEBP7VrxYAkmDatZw6f9xUi9GQWQUl9Gs8D2W44tmQ4tfR6ReZ3Jo3Y6B5yFbcPxClV1IMzziL4hectpsOJ000Jd7aJVPi",
);

export default function Payment() {
  const [checkoutMutation, { data }] = useCheckoutMutation();
  const checkout = () => {
    checkoutMutation();
  };
  if (data) {
    window.open(data?.checkout, "_self");
  }
  const option = {
    clientSecret:
      "pi_3Mdzl1BP7VrxYAkm03RsT4Lp_secret_faXqXUF3lXcd4KnmJdgRchuT0",
    appearance: {},
  };

  return (
    <div>
      <div>
        <h1>Checkout Payment</h1>
        <button onClick={checkout}>Checkout</button>
      </div>
      <Elements stripe={stripe} options={option}>
        <div>
          <h1>Payment Intent</h1>
          <CheckoutForm />
        </div>
      </Elements>
    </div>
  );
}
