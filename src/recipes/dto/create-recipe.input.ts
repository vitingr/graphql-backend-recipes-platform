import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field((type) => [String])
  ingredients: string[];

  @Field((type) => [String])
  methods: string[];

  @Field({ nullable: true })
  photo: string;

  @Field()
  creatorId: string;

  @Field({ nullable: true })
  creatorPhoto: string;

  @Field()
  creatorName: string;

  @Field({ nullable: true })
  type: string;
}
