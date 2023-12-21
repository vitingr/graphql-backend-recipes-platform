import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { PrismaService } from 'src/database/prisma.service';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {

  constructor (private prisma: PrismaService) {}

  create(createCommentInput: CreateCommentInput): Promise<Comment> {
    const newComment = this.prisma.comment.create({
      data: createCommentInput,
    });
    return newComment;
  }

  findAll(): Promise<Comment[]> {
    return this.prisma.comment.findMany();
  }

  findOne(id: string): Promise<Comment> {
    return this.prisma.comment.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateCommentInput: UpdateCommentInput) {
    return `This action updates a #${id} comment`;
  }

  remove(id: string): Promise<void> {
    this.prisma.recipe.delete({
      where: {
        id: id
      }
    })
    return
  }

  findRecipeCommentaries(id: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({ 
      where: {
        recipeId: id
      }
    })
  }

  findUserCommentaries(id: string): Promise<Comment[]> {
    return this.prisma.comment.findMany({
      where: {
        creatorId: id
      }
    })
  }
}
