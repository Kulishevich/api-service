import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TopPageModel } from './models/top-page.model';
import { TopPageService } from './top-page.service';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly topPageService: TopPageService) {}

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {
    return this.topPageService.create(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return this.topPageService.get(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.topPageService.delete(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPageModel) {
    return this.topPageService.patch(id, dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {
    return this.topPageService.find(dto);
  }
}
