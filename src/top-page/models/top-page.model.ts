import { prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel extends TimeStamps {
  @prop({ required: true })
  firstCategory: TopLevelCategory;
  @prop()
  secondCategory: string;
  @prop()
  title: string;
  @prop()
  category: string;
  @prop()
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
  };
  @prop()
  advantages: {
    title: string;
    description: string;
  }[];
  @prop()
  seoText: string;
  @prop()
  tagsTitle: string;
  @prop()
  tags: string[];
}
