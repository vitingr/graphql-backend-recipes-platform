import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [RecipesResolver, RecipesService, PrismaService],
  exports: [RecipesService]
})
export class RecipesModule {}
