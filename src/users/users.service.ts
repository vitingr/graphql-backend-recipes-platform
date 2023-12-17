import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUser } from './dto/create-user';
import { User } from './user-entity';
import { Recipe } from '@prisma/client';
import { UpdateUser } from './dto/update-user';
import { UpdateBio } from './dto/update-bio';

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

  updateUser(UpdateUser: UpdateUser): Promise<User> {
    const updateUser = this.prisma.user.update({
      where: {
        id: UpdateUser.id
      },
      data: {
        partner: true
      }
    })
    return updateUser
  }

  updateBio(UpdateBio: UpdateBio): Promise<User> {
    const updateBio = this.prisma.user.update({
      where: {
        id: UpdateBio.id
      },
      data: {
        bio: UpdateBio.bio
      }
    })
    return updateBio
  } 
}
