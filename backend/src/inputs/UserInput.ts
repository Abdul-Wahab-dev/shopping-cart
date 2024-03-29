import { InputType, Field } from "type-graphql";
import { ROLE } from "../enums/UserEnum";

@InputType()
export class userInput {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => ROLE, { nullable: true })
  role?: ROLE;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String, { nullable: true })
  customerId?: string;
}
