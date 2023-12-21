import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class LikeRecipe {
  @Field()
  userId: string;

  @Field()
  recipeId: string;
}
