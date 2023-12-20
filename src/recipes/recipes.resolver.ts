import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecipesService } from './recipes.service';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Mutation(() => Recipe)
  createRecipe(@Args('createRecipeInput') createRecipeInput: CreateRecipeInput) {
    return this.recipesService.create(createRecipeInput);
  }

  @Query(returns => [Recipe], { name: 'recipes' })
  findAll() {
    return this.recipesService.findAll();
  }

  @Query(returns => Recipe, { name: 'recipe' })
  getRecipe(@Args('id', { type: () => String }) id: string) {
    return this.recipesService.findOne(id);
  }

  @Mutation(returns => Recipe)
  updateRecipe(@Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput) {
    return this.recipesService.update(updateRecipeInput.id, updateRecipeInput);
  }

  @Mutation(returns => Recipe)
  removeRecipe(@Args('id', { type: () => Int }) id: string) {
    return this.recipesService.remove(id);
  }

  @Query(returns => [Recipe])
  getUserRecipes(@Args('id', {type: () => String}) id: string) {
    return this.recipesService.getUserRecipes(id)
  }
}
