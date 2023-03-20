import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class subscription {
  @Field(() => String)
  subscriptionId: string;

  @Field(() => String)
  clientSecret: string;
}
