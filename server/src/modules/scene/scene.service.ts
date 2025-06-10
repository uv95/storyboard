import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { validate } from 'uuid';
import { CreateSceneInput } from './dto/create-scene.input';
import { UpdateSceneInput } from './dto/update-scene.input';

@Injectable()
export class SceneService {
  constructor(private readonly prisma: PrismaService) {}

  private async validateScene(id: string) {
    if (!validate(id)) {
      throw new BadRequestException('Invalid id');
    }

    const scene = await this.prisma.scene.findUnique({
      where: { id },
    });

    if (!scene) {
      throw new NotFoundException('Scene with this id not found');
    }

    return scene;
  }

  async findAllByStoryboardId(storyboardId: string) {
    const storyboard = await this.prisma.storyboard.findUnique({
      where: { id: storyboardId },
    });

    if (!storyboard) {
      throw new NotFoundException('Storyboard with this id not found');
    }

    return await this.prisma.scene.findMany({ where: { storyboardId } });
  }

  async findById(id: string) {
    return await this.validateScene(id);
  }

  async create(data: CreateSceneInput) {
    const { storyboardId, ...rest } = data;

    return await this.prisma.scene.create({
      data: {
        ...rest,
        storyboard: {
          connect: { id: storyboardId },
        },
      },
    });
  }

  async update(id: string, data: UpdateSceneInput) {
    await this.validateScene(id);

    return await this.prisma.scene.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.validateScene(id);

    return await this.prisma.scene.delete({
      where: { id },
    });
  }
}
