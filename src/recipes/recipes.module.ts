import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';

@Module({
  providers: [RecipesResolver, RecipesService],
  exports: [RecipesService]
})
export class RecipesModule {}
