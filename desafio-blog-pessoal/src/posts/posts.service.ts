import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePostDto, userId: string) {
    return this.prisma.post.create({
      data: {
        title: dto.title,
        content: dto.content,
        coverImage: dto.coverImage,
        published: dto.published ?? false,
        authorId: userId,
      },
      include: { author: true },
    });
  }

  async findAll() {
    return this.prisma.post.findMany({
      include: { author: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: { author: true },
    });
    if (!post) throw new NotFoundException('Post não encontrado');
    return post;
  }

  async update(id: string, dto: UpdatePostDto, userId: string) {
    const post = await this.findOne(id);
    if (post.authorId !== userId) {
      throw new ForbiddenException('Você não tem permissão para editar este post');
    }
    return this.prisma.post.update({
      where: { id },
      data: dto,
      include: { author: true },
    });
  }

  async remove(id: string, userId: string) {
    const post = await this.findOne(id);
    if (post.authorId !== userId) {
      throw new ForbiddenException('Você não tem permissão para excluir este post');
    }
    await this.prisma.post.delete({ where: { id } });
  }
}