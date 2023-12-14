import { ObjectType, Field, InputType, Int} from '@nestjs/graphql';
import { IsAlpha } from 'class-validator'

@ObjectType()
export class Recipe {
  @Field(type => String)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  photo: string;

  @Field(type => Int)
  qtdLikes: number;

  @Field()
  creatorId: string;

  @Field()
  content: string;

  @Field()
  type: string;
}
