import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdatePartner {
  @Field()
  id: string;
}