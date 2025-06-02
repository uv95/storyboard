import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateStoryboardInput } from './dto/create-storyboard.input';
import { UpdateStoryboardInput } from './dto/update-storyboard.input';

@Injectable()
export class StoryboardService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.storyboard.findMany({
      include: {
        scenes: true,
      },
    });
  }

  findById(id: string) {
    return this.prisma.storyboard.findUnique({
      where: { id },
      include: {
        scenes: true,
      },
    });
  }

  create(data: CreateStoryboardInput) {
    return this.prisma.storyboard.create({
      data,
    });
  }

  update(id: string, data: UpdateStoryboardInput) {
    return this.prisma.storyboard.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.storyboard.delete({
      where: { id },
    });
  }
}
