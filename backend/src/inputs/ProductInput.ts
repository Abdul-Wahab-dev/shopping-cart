import { InputType, Field } from "type-graphql";

@InputType()
export class ProductInput {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  category: string;

  @Field(() => String, { nullable: true })
  subCategory?: string;

  @Field(() => Number)
  basePrice: number;

  @Field(() => Number)
  vatPrice: number;
}
