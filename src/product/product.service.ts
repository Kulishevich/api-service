import { Inject, Injectable } from '@nestjs/common';
import { ProductModel } from './models/product.model';
import { getModelToken } from 'nestjs-typegoose';
import type { ReturnModelType } from '@typegoose/typegoose';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject(getModelToken(ProductModel.name))
    private readonly productModel: ReturnModelType<typeof ProductModel>,
  ) {}

  async create(dto: Omit<ProductModel, '_id'>) {
    return this.productModel.create(dto);
  }

  async get(id: string) {
    return this.productModel.findById(id);
  }

  async delete(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

  async patch(id: string, dto: ProductModel) {
    return this.productModel.findByIdAndUpdate(id, dto, { new: true });
  }

  async find(dto: ProductDto) {
    return this.productModel.find(dto);
  }
}
