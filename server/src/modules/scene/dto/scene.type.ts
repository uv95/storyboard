import { Field, ObjectType } from '@nestjs/graphql';
import { UUIDType } from 'src/graphql/scalars/uuid.type';
import { Storyboard } from 'src/modules/storyboard/dto/storyboard.type';

@ObjectType()
export class Scene {
  @Field(() => UUIDType)
  id: string;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  icon: string;

  @Field()
  order: number;

  @Field(() => Storyboard)
  storyboard: Storyboard;

  @Field(() => UUIDType)
  storyboardId: string;
}
