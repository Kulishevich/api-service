import { Inject, Injectable } from '@nestjs/common';
import { ReviewModel } from './models/review.model';
import type { ReturnModelType } from '@typegoose/typegoose';
import { getModelToken } from 'nestjs-typegoose';

@Injectable()
export class ReviewService {
  constructor(
    @Inject(getModelToken(ReviewModel.name))
    private readonly reviewModel: ReturnModelType<typeof ReviewModel>,
  ) {}

  async create(dto: Omit<ReviewModel, '_id'>) {
    return this.reviewModel.create(dto);
  }

  async delete(id: string) {
    return this.reviewModel.findByIdAndDelete(id);
  }

  async getByProductId(productId: string) {
    return this.reviewModel.find({ productId });
  }
}
