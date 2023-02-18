import { InputType, Field } from "type-graphql";

@InputType()
export class productInput {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  image: string;

  @Field(() => Number)
  price: number;
}
