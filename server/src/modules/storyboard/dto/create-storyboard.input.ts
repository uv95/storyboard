import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateStoryboardInput {
  @Field()
  title: string;
}
