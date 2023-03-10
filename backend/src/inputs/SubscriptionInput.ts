import { Field, InputType, ArgsType } from "type-graphql";

@InputType()
export class subscriptionInput {
  @Field(() => String)
  customerId: string;

  @Field(() => String)
  priceId: string;
}
