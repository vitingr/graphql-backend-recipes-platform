import { Injectable } from '@nestjs/common';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { PrismaService } from 'src/database/prisma.service';
import { Recipe } from '@prisma/client';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  create(createRecipeInput: CreateRecipeInput): Promise<Recipe> {
    const newRecipe = this.prisma.recipe.create({
      data: createRecipeInput,
    });
    return newRecipe;
  }

  findAll(): Promise<Recipe[]> {
    return this.prisma.recipe.findMany();
  }

  findOne(id: string): Promise<Recipe> {
    return this.prisma.recipe.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: string, updateRecipeInput: UpdateRecipeInput): Promise<Recipe> {
    const updateRecipe = this.prisma.recipe.update({
      where: {
        id: id,
      },
      data: updateRecipeInput,
    });
    return updateRecipe;
  }

  remove(id: string): Promise<Recipe> {
    const removedRecipe = this.prisma.recipe.delete({
      where: {
        id: id,
      },
    });
    return removedRecipe;
  }

  getUserRecipes(id: string): Promise<Recipe[]> {
    return this.prisma.recipe.findMany({
      where: {
        creatorId: id,
      },
    });
  }

  likeRecipe(userId: string, recipeId: string): Promise<Recipe> {
    return this.prisma.recipe.update({
      where: {
        id: recipeId,
      },
      data: {
        likes: {
          push: userId,
        },
        qtdLikes: { increment: 1 },
      },
    });
  }

  async dislikeRecipe(userId: string, recipeId: string): Promise<Recipe> {
    const recipe = await this.prisma.recipe.findUnique({
      where: {
        id: recipeId,
      },
    });

    return this.prisma.recipe.update({
      where: {
        id: recipeId,
      },
      data: {
        likes: {
          set: recipe.likes.filter((userId) => userId !== userId),
        },
        qtdLikes: { decrement: 1 },
      },
    });
  }

  async getUserFavouriteRecipes(id: string): Promise<Recipe[]> {
    return this.prisma.recipe.findMany({
      where: {
        likes: {
          has: id as string,
        },
      },
    });
  }

  async searchRecipe(string: string): Promise<Recipe[]> {
    return this.prisma.recipe.findMany({
      where: {
        title: {
          contains: string,
        },
      },
    });
  }

  searchRecipeType(type: string): Promise<Recipe[]> {
    return this.prisma.recipe.findMany({
      where: {
        type: type,
      },
    });
  }
}
