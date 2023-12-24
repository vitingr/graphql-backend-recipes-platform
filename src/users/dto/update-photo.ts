import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserPhoto {
  @Field()
  id: string;

  @Field()
  photo: string;
}
