import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { validate } from 'uuid';
import { CreateSceneInput } from './dto/create-scene.input';
import { ReorderScenesInput } from './dto/reorder-scenes.input';
import { UpdateSceneInput } from './dto/update-scene.input';
import { Prisma } from '@prisma/client';

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

  async reorderScenes(scenes: ReorderScenesInput[]) {
    const TEMP_ORDER_OFFSET = -1000;

    const orders = scenes.map((scene) => scene.order);
    const uniqueOrders = new Set(orders);
    const hasInvalidOrder = orders.some((order) => order <= 0);

    if (hasInvalidOrder || uniqueOrders.size !== scenes.length) {
      throw new BadRequestException(
        'Each order must be a unique positive integer',
      );
    }

    const ids = scenes.map((scene) => scene.id);
    const existingScenes = await this.prisma.scene.findMany({
      where: { id: { in: ids } },
    });

    if (existingScenes.length !== scenes.length) {
      throw new NotFoundException('One or more scenes not found');
    }

    try {
      await this.prisma.$transaction(
        scenes.map(({ id }, index) =>
          this.prisma.scene.update({
            where: { id },
            data: { order: TEMP_ORDER_OFFSET - index },
          }),
        ),
      );

      return await this.prisma.$transaction(
        scenes.map(({ id, order }) =>
          this.prisma.scene.update({ where: { id }, data: { order } }),
        ),
      );
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new BadRequestException(
            'Order values must be unique within the same storyboard',
          );
        }
      }

      throw new InternalServerErrorException(
        `Failed to reorder the scenes: ${error}`,
      );
    }
  }
}
