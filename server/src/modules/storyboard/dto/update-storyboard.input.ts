import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateStoryboardInput {
  @Field()
  title: string;
}
