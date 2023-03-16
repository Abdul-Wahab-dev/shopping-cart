import { Field, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Product {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => [Price])
  prices: Price[];
}

@ObjectType()
export class Price {
  @Field(() => String)
  id: string;

  @Field(() => String)
  currency: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  interval: string;

  @Field(() => Number)
  unit_amount: number;

  @Field(() => String)
  unit_amount_decimal: string;
}
