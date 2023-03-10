import { Field, InputType } from "type-graphql";

@InputType()
export class priceInput {
  @Field(() => String)
  productId: string;

  @Field(() => String)
  interval: string;

  @Field(() => Number)
  amount: number;

  @Field(() => String)
  currency: string;
}
