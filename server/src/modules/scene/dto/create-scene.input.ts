import { Field, InputType } from '@nestjs/graphql';
import { UUIDType } from 'src/graphql/scalars/uuid.type';

@InputType()
export class CreateSceneInput {
  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field()
  order: number;

  @Field(() => UUIDType)
  storyboardId: string;
}
