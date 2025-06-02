import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Storyboard } from 'src/modules/storyboard/dto/storyboard.type';

@ObjectType()
export class Scene {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  icon: string;

  @Field(() => Int)
  order: number;

  @Field(() => Storyboard)
  storyboard: Storyboard;

  @Field(() => ID)
  storyboardId: string;
}
