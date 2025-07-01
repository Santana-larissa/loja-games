import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Category } from '../entities/category.entity';
import { CategoryService } from '../service/category.service';

@Controller('categorys')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<Category> {
    return this.categoryService.findById(id);
  }

  @Post()
  create(@Body() category: Category): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() category: Category): Promise<Category> {
    return this.categoryService.update(id, category);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.categoryService.delete(id);
  }
}

