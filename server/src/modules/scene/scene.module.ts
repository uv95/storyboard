import { Module } from '@nestjs/common';
import { SceneService } from './scene.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SceneResolver } from './scene.resolver';

@Module({
  providers: [SceneService, PrismaService, SceneResolver],
})
export class SceneModule {}
