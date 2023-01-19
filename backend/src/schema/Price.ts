import { Field, ObjectType } from "type-graphql";
import { Product } from "./Product";

@ObjectType()
export class Price {
  @Field(() => Number)
  basePrice: number;

  @Field(() => Number)
  vatPrice: number;

  // @Field(() => Product)
  // product: Product;
}
