import { Module } from '@nestjs/common';
import { SceneService } from './scene.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [SceneService, PrismaService],
})
export class SceneModule {}
