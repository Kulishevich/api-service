import { prop } from '@typegoose/typegoose';

export class AuthModel {
  @prop({ required: true })
  email: string;

  @prop({ required: true })
  passwordHash: string;
}
