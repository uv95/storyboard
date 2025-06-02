import { Args, Resolver } from '@nestjs/graphql';
import { Storyboard } from './dto/storyboard.type';
import { StoryboardService } from './storyboard.service';
import { Query } from '@nestjs/graphql';
import { UUIDType } from 'src/graphql/scalars/uuid.type';

@Resolver(() => Storyboard)
export class StoryboardResolver {
  constructor(private storyboardService: StoryboardService) {}

  @Query(() => Storyboard)
  async storyboard(@Args('id', { type: () => UUIDType }) id: string) {
    return this.storyboardService.findById(id);
  }
}
