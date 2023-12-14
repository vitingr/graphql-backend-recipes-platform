import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType() // Adicione este decorador
export class User {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  partner: boolean;

  @Field()
  photo: string;

  @Field({ nullable: true })
  bio: string;

  @Field(type => [String])
  recipesCreated: string[];

  @Field(type => [String])
  recipesLiked: string[];

  @Field()
  driverRecipeCreate: boolean;

  @Field()
  driverProfile: boolean;
}