import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from 'class-validator'
import { ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateUser {
  @IsAlpha()
  @Field()
  name: string;

  @IsAlpha()
  @Field()
  firstname: string;

  @IsAlpha()
  @Field()
  lastname: string;

  @IsAlpha()
  @Field()
  email: string;

  @IsAlpha()
  @Field({nullable: true})
  photo: string;
}