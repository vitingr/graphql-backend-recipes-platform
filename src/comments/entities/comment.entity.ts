import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field((type) => String)
  id: string;

  @Field()
  recipeId: string;

  @Field()
  creatorId: string;

  @Field()
  creatorPhoto: string;

  @Field()
  creatorName: string;

  @Field()
  content: string;

  @Field((type) => Int, { nullable: true })
  qtdLikes: number;

  @Field((type) => [String], { nullable: true })
  likes: string[];

  @Field((type) => Date)
  createdAt: Date;
}
