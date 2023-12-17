import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class UpdateBio {
  @Field()
  id: string;

  @IsAlpha()
  @Field()
  bio: string;
}