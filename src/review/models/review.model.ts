import { defaultClasses, prop } from '@typegoose/typegoose';

export class ReviewModel extends defaultClasses.TimeStamps {
  @prop({ required: true })
  productId: string;
  @prop({ required: true })
  name: string;
  @prop({ required: true })
  title: string;
  @prop({ required: true })
  description: string;
  @prop({ required: true })
  rating: number;
}
