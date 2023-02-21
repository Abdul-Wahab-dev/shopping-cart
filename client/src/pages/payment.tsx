import { useCheckoutQuery } from "../api/schema/queries/queries.generated";
export default function Payment() {
  // const { data } = useHelloQuery({
  //   variables: {
  //     id: "1",
  //     name: "hello",
  //     price: 200,
  //   },
  // });

  const { data, error } = useCheckoutQuery();
  // console.log(data, "data");
  if (data) {
    console.log(data, "data");
  }
  if (error) {
    console.log(error, "error");
  }
  const checkout = () => {};
  return (
    <div>
      <h1>payment</h1>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}
