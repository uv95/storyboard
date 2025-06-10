import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateStoryboardInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;
}
