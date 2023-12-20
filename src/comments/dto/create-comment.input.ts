import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
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

  @Field((type) => Int, {nullable: true})
  qtdLikes?: number;

  @Field((type) => [String], {nullable: true})
  likes: string[];
}
