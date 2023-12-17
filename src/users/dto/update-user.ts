import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUser {
  @Field()
  id: string;
}