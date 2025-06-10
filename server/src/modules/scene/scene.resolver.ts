import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';
import { UUIDType } from 'src/graphql/scalars/uuid.type';
import { Scene } from './dto/scene.type';
import { SceneService } from './scene.service';
import { CreateSceneInput } from './dto/create-scene.input';
import { UpdateSceneInput } from './dto/update-scene.input';

@Resolver(() => Scene)
export class SceneResolver {
  constructor(private sceneService: SceneService) {}

  @Query(() => Scene)
  async getScene(@Args('id', { type: () => UUIDType }) id: string) {
    return await this.sceneService.findById(id);
  }

  @Query(() => [Scene])
  async getStoryboardScenes(
    @Args('storyboardId', { type: () => UUIDType }) storyboardId: string,
  ) {
    return await this.sceneService.findAllByStoryboardId(storyboardId);
  }

  @Mutation(() => Scene)
  async createScene(@Args('data') data: CreateSceneInput) {
    return await this.sceneService.create(data);
  }

  @Mutation(() => Scene)
  async updateScene(
    @Args('id') id: string,
    @Args('data') data: UpdateSceneInput,
  ) {
    return await this.sceneService.update(id, data);
  }

  @Mutation(() => Scene)
  async deleteScene(@Args('id') id: string) {
    return await this.sceneService.delete(id);
  }
}
