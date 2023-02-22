import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
export default function CheckoutForm() {
  const stripe = useStripe();
  const element = useElements();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !element) return;
    const result = await stripe.confirmPayment({
      elements: element,
      confirmParams: {
        return_url: "http://locathost:3000/payment",
      },
    });
    console.log(result, "result");
  };
  return (
    <div>
      <PaymentElement />
      <button onClick={onSubmitHandler}>Submit</button>
    </div>
  );
}
