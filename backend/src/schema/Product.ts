import { Field, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Product {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  description: string;

  @Field(() => Number)
  price: number;

  @Field(() => User, { nullable: true })
  user?: User;
}
