import { Field, InputType } from "type-graphql";

@InputType()
export class PaymentIntentInput {
  @Field(() => Number)
  amount: number;

  @Field(() => String)
  currency: string;
}
