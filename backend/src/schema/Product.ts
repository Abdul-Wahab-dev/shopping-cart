import { Field, ObjectType } from "type-graphql";
import { Price } from "./Price";
import { User } from "./User";

@ObjectType()
export class Product {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  subCategory: string;

  @Field(() => User)
  User: User;

  @Field(() => Price)
  price: Price;
}
