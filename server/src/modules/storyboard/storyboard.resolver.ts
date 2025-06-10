import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Storyboard } from './dto/storyboard.type';
import { StoryboardService } from './storyboard.service';
import { Query } from '@nestjs/graphql';
import { UUIDType } from 'src/graphql/scalars/uuid.type';
import { CreateStoryboardInput } from './dto/create-storyboard.input';
import { UpdateStoryboardInput } from './dto/update-storyboard.input';

@Resolver(() => Storyboard)
export class StoryboardResolver {
  constructor(private storyboardService: StoryboardService) {}

  @Query(() => Storyboard)
  async getStoryboard(@Args('id', { type: () => UUIDType }) id: string) {
    return await this.storyboardService.findById(id);
  }

  @Query(() => [Storyboard])
  async getStoryboards() {
    return await this.storyboardService.findAll();
  }

  @Mutation(() => Storyboard)
  async createStoryboard(@Args('data') data: CreateStoryboardInput) {
    return await this.storyboardService.create(data);
  }

  @Mutation(() => Storyboard)
  async updateStoryboard(
    @Args('id') id: string,
    @Args('data') data: UpdateStoryboardInput,
  ) {
    return await this.storyboardService.update(id, data);
  }

  @Mutation(() => Storyboard)
  async deleteStoryboard(@Args('id') id: string) {
    return await this.storyboardService.delete(id);
  }
}
