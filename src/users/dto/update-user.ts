import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateUser {
  @Field()
  id: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  name: string;

  @Field()
  bio: string;
}