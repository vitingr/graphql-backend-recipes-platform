import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaService } from 'src/database/prisma.service';
import { RecipesModule } from 'src/recipes/recipes.module';

@Module({
  providers: [UsersService, UsersResolver, PrismaService, RecipesModule]
})
export class UsersModule {}
