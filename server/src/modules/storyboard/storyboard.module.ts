import { Module } from '@nestjs/common';
import { StoryboardResolver } from './storyboard.resolver';
import { StoryboardService } from './storyboard.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  providers: [StoryboardResolver, StoryboardService, PrismaService],
})
export class StoryboardModule {}
