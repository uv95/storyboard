import { Args, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { UUIDType } from 'src/graphql/scalars/uuid.type';
import { Scene } from './scene.type';
import { SceneService } from '../scene.service';

@Resolver(() => Scene)
export class SceneResolver {
  constructor(private sceneService: SceneService) {}

  @Query(() => Scene)
  async Scene(@Args('id', { type: () => UUIDType }) id: string) {
    return this.sceneService.findById(id);
  }
}
