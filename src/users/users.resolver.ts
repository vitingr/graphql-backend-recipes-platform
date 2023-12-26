import { Recipe } from 'src/recipes/entities/recipe.entity';
import { CreateUser } from './dto/create-user';
import { User } from './user-entity';
import { UsersService } from './users.service';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { UpdateUser } from './dto/update-user';
import { UpdateBio } from './dto/update-bio';
import { UpdatePartner } from './dto/update-partner';
import { UpdateUserPhoto } from './dto/update-photo';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => User)
  getUser(@Args('email', { type: () => String }) email: string): Promise<User> {
    return this.usersService.findOne(email);
  }

  @Query((returns) => User)
  getUserById(@Args('id', { type: () => String }) id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @ResolveField((returns) => [Recipe])
  getRecipes(@Parent() user: User): Promise<Recipe[]> {
    return this.usersService.getRecipes(user.id);
  }

  @Mutation((returns) => User)
  createNewUser(@Args('createUser') createUser: CreateUser): Promise<User> {
    return this.usersService.createNewUser(createUser);
  }

  @Mutation((returns) => User)
  updateUser(@Args('updateUser') updateUser: UpdatePartner): Promise<User> {
    return this.usersService.updateUser(updateUser);
  }

  @Mutation((returns) => User)
  updateBio(@Args('updateBio') updateBio: UpdateBio): Promise<User> {
    return this.usersService.updateBio(updateBio);
  }

  @Mutation((returns) => User)
  updateUserInfo(
    @Args('updateUserInfo') updateUserInfo: UpdateUser,
  ): Promise<User> {
    return this.usersService.updateUserInfo(updateUserInfo);
  }

  @Mutation((returns) => User)
  updateUserPhoto(
    @Args('updateUserPhoto') updateUserPhoto: UpdateUserPhoto,
  ): Promise<User> {
    return this.usersService.updateUserPhoto(updateUserPhoto);
  }
}
