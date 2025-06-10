import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { UUIDType } from 'src/graphql/scalars/uuid.type';
import { Scene } from 'src/modules/scene/dto/scene.type';

@ObjectType()
export class Storyboard {
  @Field(() => UUIDType)
  id: string;

  @Field()
  title: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => [Scene])
  scenes: Scene[];
}
