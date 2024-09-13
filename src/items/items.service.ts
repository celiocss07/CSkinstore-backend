import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    return await this.prisma.item.create({ data: createItemDto });
  }

  async findAll(filters: any) {
    const { name, floatMin, floatMax, priceMin, priceMax, category, sortBy } =
      filters;

    return this.prisma.item.findMany({
      where: {
        AND: [
          name ? { name: { contains: name } } : {},
          floatMin ? { float: { gte: `${floatMin}` } } : {},
          floatMax ? { float: { lte: `${floatMax}` } } : {},
          priceMin ? { price: { gte: priceMin } } : {},
          priceMax ? { price: { lte: priceMax } } : {},
          category ? { category: { equals: category } } : {},
        ],
      },
      ...(sortBy === 'price' && { orderBy: { price: 'asc' } }),
      ...(sortBy === 'float' && { orderBy: { float: 'asc' } }),
    });
  }

  async findById(id: string) {
    return await this.prisma.item.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateItemDto) {
    return await this.prisma.item.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return await this.prisma.item.delete({ where: { id } });
  }
}
