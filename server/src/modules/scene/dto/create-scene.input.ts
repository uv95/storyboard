import { Field, InputType } from '@nestjs/graphql';
import { UUIDType } from 'src/graphql/scalars/uuid.type';
import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateSceneInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  icon?: string;

  @Field()
  @IsNumber()
  @IsNotEmpty()
  order: number;

  @Field(() => UUIDType)
  @IsString()
  storyboardId: string;
}
