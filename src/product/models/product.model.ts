import { defaultClasses, prop } from '@typegoose/typegoose';

export class ProductModel extends defaultClasses.TimeStamps {
  @prop({ required: true })
  image: string;
  @prop({ required: true })
  title: string;
  @prop({ required: true })
  price: number;
  @prop({ required: true })
  oldPrice: number;
  @prop({ required: true })
  credit: number;
  @prop({ required: true })
  calculatedRating: number;
  @prop({ required: true })
  description: string;
  @prop({ required: true })
  advantages: string;
  @prop({ required: true })
  disadvantages: string;
  @prop({ required: true })
  categories: string[];
  @prop({ required: true })
  tags: string[];
  @prop({ required: true })
  characteristics: {
    [key: string]: string;
  };
}
