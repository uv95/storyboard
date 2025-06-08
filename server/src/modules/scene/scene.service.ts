import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSceneInput } from './dto/create-scene.input';
import { UpdateSceneInput } from './dto/update-scene.input';

@Injectable()
export class SceneService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.scene.findMany();
  }

  findById(id: string) {
    return this.prisma.scene.findUnique({
      where: { id },
    });
  }

  create(data: CreateSceneInput) {
    const { storyboardId, ...rest } = data;

    return this.prisma.scene.create({
      data: {
        ...rest,
        storyboard: {
          connect: { id: storyboardId },
        },
      },
    });
  }

  update(id: string, data: UpdateSceneInput) {
    return this.prisma.scene.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.scene.delete({
      where: { id },
    });
  }
}
