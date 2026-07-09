import { Inject, Injectable } from '@nestjs/common';
import type { ReturnModelType } from '@typegoose/typegoose';
import { getModelToken } from 'nestjs-typegoose';
import { TopPageModel } from './models/top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Injectable()
export class TopPageService {
  constructor(
    @Inject(getModelToken(TopPageModel.name))
    private readonly topPageModel: ReturnModelType<typeof TopPageModel>,
  ) {}

  async create(dto: Omit<TopPageModel, '_id'>) {
    return this.topPageModel.create(dto);
  }

  async get(id: string) {
    return this.topPageModel.findById(id);
  }
  async delete(id: string) {
    return this.topPageModel.findByIdAndDelete(id);
  }
  async patch(id: string, dto: TopPageModel) {
    return this.topPageModel.findByIdAndUpdate(id, dto, { new: true });
  }
  async find(dto: FindTopPageDto) {
    return this.topPageModel.find(dto);
  }
}
