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

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((returns) => User)
  getUser(@Args('email', { type: () => String }) email: string): Promise<User> {
    return this.usersService.findOne(email);
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
  updateUser(@Args('updateUser') updateUser: UpdateUser): Promise<User> {
    return this.usersService.updateUser(updateUser);
  }

  @Mutation((returns) => User)
  updateBio(@Args('updateBio') updateBio: UpdateBio): Promise<User> {
    return this.usersService.updateBio(updateBio);
  }
}
