import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DislikeRecipe {
  @Field()
  userId: string;

  @Field()
  recipeId: string;
}
