import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommentsService } from './comments.service';
import { Comment } from './entities/comment.entity';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver(() => Comment)
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}

  @Mutation((returns) => Comment)
  createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
  ) {
    return this.commentsService.create(createCommentInput);
  }

  @Query((returns) => [Comment], { name: 'comments' })
  findAll() {
    return this.commentsService.findAll();
  }

  @Query((returns) => Comment, { name: 'comment' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.commentsService.findOne(id);
  }

  @Mutation((returns) => Comment)
  updateComment(
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  ) {
    return this.commentsService.update(
      updateCommentInput.id,
      updateCommentInput,
    );
  }

  @Mutation((returns) => Comment)
  removeComment(@Args('id', { type: () => String }) id: string) {
    return this.commentsService.remove(id);
  }

  @Query((returns) => [Comment])
  findRecipeCommentaries(@Args('id', { type: () => String }) id: string) {
    return this.commentsService.findRecipeCommentaries(id);
  }

  @Query((returns) => [Comment])
  findUserCommentaries(@Args('id', { type: () => String }) id: string) {
    return this.commentsService.findUserCommentaries(id);
  }
}
