import { useCheckoutMutation } from "../api/schema/mutation/mutations.generated";
export default function Payment() {
  const [checkoutMutation, { data }] = useCheckoutMutation();
  const checkout = () => {
    checkoutMutation();
  };
  if (data) {
    window.open(data?.checkout, "_self");
  }

  return (
    <div>
      <h1>Checkout Payment</h1>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
