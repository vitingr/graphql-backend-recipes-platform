import { ObjectType, Field, InputType, Int} from '@nestjs/graphql';
import { IsAlpha } from 'class-validator'

@ObjectType()
export class Recipe {
  @Field(type => String)
  id: string;

  @Field({nullable: true})
  title: string;

  @Field()
  description: string;

  @Field(type => [String])
  ingredients: string[];

  @Field(type => [String])
  methods: string[];

  @Field()
  photo: string;

  @Field(type => Int)
  qtdLikes: number;

  @Field()
  creatorId: string;

  @Field()
  type: string;
}
