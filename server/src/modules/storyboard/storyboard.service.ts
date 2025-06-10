import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { validate } from 'uuid';

@Injectable()
export class StoryboardService {
  constructor(private readonly prisma: PrismaService) {}

  private async validateStoryboard(id: string) {
    if (!validate(id)) {
      throw new BadRequestException('Invalid id');
    }

    const storyboard = await this.prisma.storyboard.findUnique({
      where: { id },
    });

    if (!storyboard) {
      throw new NotFoundException('Storyboard with this id not found');
    }

    return storyboard;
  }

  async findAll() {
    return await this.prisma.storyboard.findMany({
      include: {
        scenes: true,
      },
    });
  }

  async findById(id: string) {
    return await this.validateStoryboard(id);
  }

  async create(data: Prisma.StoryboardCreateInput) {
    return await this.prisma.storyboard.create({
      data,
    });
  }

  async update(id: string, data: Prisma.StoryboardUpdateInput) {
    await this.validateStoryboard(id);

    return await this.prisma.storyboard.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.validateStoryboard(id);

    return await this.prisma.storyboard.delete({
      where: { id },
    });
  }
}
