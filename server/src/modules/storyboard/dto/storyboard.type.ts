import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Scene } from 'src/modules/scene/dto/scene.type';

@ObjectType()
export class Storyboard {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  createdAt: Date;

  @Field(() => [Scene])
  scenes: Scene[];
}
