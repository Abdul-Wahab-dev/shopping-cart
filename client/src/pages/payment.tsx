import { useHelloQuery } from "../api/schema/queries/queries.generated";
export default function Payment() {
  const { data } = useHelloQuery({
    variables: {
      id: "1",
      name: "hello",
      price: 200,
    },
  });

  console.log(data, "data");
  return <h1>Hello payment</h1>;
}
