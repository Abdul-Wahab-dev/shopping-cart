import { Field, ObjectType } from "type-graphql";
import { Product } from "../schema/Product";

@ObjectType()
export class ProductResponse {
  @Field((type) => [Product])
  products: Product[];

  @Field(() => Number)
  total: number;
}
