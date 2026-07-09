import { defaultClasses, prop, type DocumentType } from '@typegoose/typegoose';

export class AuthModel extends defaultClasses.TimeStamps {
  @prop({ required: true })
  email: string;

  @prop({ required: true })
  passwordHash: string;
}

export type AuthDocument = DocumentType<AuthModel> & defaultClasses.Base;
