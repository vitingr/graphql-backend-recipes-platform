import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateRecipeInput {
  @IsAlpha()
  @Field()
  title: string;

  @IsAlpha()
  @Field()
  description: string;

  @IsAlpha()
  @Field({nullable: true})
  photo: string;

  @IsAlpha()
  @Field()
  creatorId: string;

  @IsAlpha()
  @Field()
  String: string;

  @IsAlpha()
  @Field({nullable: true})
  type: string;
}
