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
    const userRecipes = this.prisma.recipe.findMany({
      where: {
        creatorId: id
      }
    })
    return userRecipes
  }
}
