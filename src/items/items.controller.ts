import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
  HttpCode,
  Req,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Request } from 'express';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  getItems(
    @Req() req: Request,
    @Query('name') name?: string,
    @Query('floatMin') floatMin?: number,
    @Query('floatMax') floatMax?: number,
    @Query('priceMin') priceMin?: number,
    @Query('priceMax') priceMax?: number,
    @Query('category') category?: string,
    @Query('sortBy') sortBy?: string,
  ) {
    console.log('REQ => ', req.url);
    return this.itemsService.findAll({
      name,
      floatMin,
      floatMax,
      priceMin,
      priceMax,
      category,
      sortBy,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const item = await this.itemsService.findById(id);
    if (!item) throw new NotFoundException();

    return item;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    const item = await this.itemsService.findById(id);

    if (!item) throw new NotFoundException();

    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const item = await this.itemsService.findById(id);

    if (!item) throw new NotFoundException();
    return this.itemsService.remove(id);
  }
}
