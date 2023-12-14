import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUser } from './dto/create-user';
import { User } from './user-entity';
import { Recipe } from '@prisma/client';

@Injectable()
export class UsersService {

  constructor (private prisma: PrismaService) {}

  createNewUser(CreateUser: CreateUser): Promise<User> {
    const newUser = this.prisma.user.create({
      data: CreateUser
    })
    return newUser
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  findOne(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email: email
      }
    })
  }

  getRecipes(id: string): Promise<Recipe[]> {
    const recipes = this.prisma.recipe.findMany({
      where: {
        creatorId: id
      }
    })
    return recipes
  }
}
