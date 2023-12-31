import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUser } from './dto/create-user';
import { User } from './user-entity';
import { Recipe } from '@prisma/client';
import { UpdateUser } from './dto/update-user';
import { UpdateBio } from './dto/update-bio';
import { UpdatePartner } from './dto/update-partner';
import { UpdateUserPhoto } from './dto/update-photo';
import { Comment } from 'src/comments/entities/comment.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  createNewUser(CreateUser: CreateUser): Promise<User> {
    const newUser = this.prisma.user.create({
      data: CreateUser,
    });
    return newUser;
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  findById(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  getRecipes(id: string): Promise<Recipe[]> {
    const recipes = this.prisma.recipe.findMany({
      where: {
        creatorId: id,
      },
    });
    return recipes;
  }

  updateUser(UpdateUser: UpdatePartner): Promise<User> {
    const updateUser = this.prisma.user.update({
      where: {
        id: UpdateUser.id,
      },
      data: {
        partner: true,
      },
    });
    return updateUser;
  }

  updateBio(UpdateBio: UpdateBio): Promise<User> {
    const updateBio = this.prisma.user.update({
      where: {
        id: UpdateBio.id,
      },
      data: {
        bio: UpdateBio.bio,
      },
    });
    return updateBio;
  }

  async updateUserInfo(updateUserInfo: UpdateUser): Promise<User> {
    const updateUser = await this.prisma.user.update({
      where: {
        id: updateUserInfo.id,
      },
      data: {
        name: updateUserInfo.name,
        firstname: updateUserInfo.firstname,
        lastname: updateUserInfo.lastname,
        bio: updateUserInfo.bio,
        photo: updateUserInfo.photo,
      },
    });

    await this.updateContent(
      updateUserInfo.id,
      updateUserInfo.photo,
      updateUserInfo.name,
    );

    return updateUser;
  }

  async updateContent(
    id: string,
    userPhoto: string,
    name: string,
  ): Promise<void> {
    const postsUpdated = await this.prisma.comment.updateMany({
      where: {
        creatorId: id,
      },
      data: {
        creatorPhoto: userPhoto,
        creatorName: name,
      },
    });
  }

  updateUserPhoto(updateUserPhoto: UpdateUserPhoto): Promise<User> {
    const updateUser = this.prisma.user.update({
      where: {
        id: updateUserPhoto.id,
      },
      data: {
        photo: updateUserPhoto.photo,
      },
    });
    return updateUser;
  }
}
