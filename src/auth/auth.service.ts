import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthModel } from './models/auth.model';
import { AuthDto } from './dto/auth.dto';
import { getModelToken } from 'nestjs-typegoose';
import type { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class AuthService {
  constructor(
    @Inject(getModelToken(AuthModel.name))
    private readonly authModel: ReturnModelType<typeof AuthModel>,
  ) {}

  async register(dto: AuthDto) {
    const oldUser = await this.authModel.findOne({ email: dto.email });
    if (oldUser) {
      throw new ConflictException('User already exists');
    }

    const user = await this.authModel.create({
      email: dto.email,
      passwordHash: dto.password,
    });

    return { email: user.email };
  }

  async login(dto: AuthDto) {
    const user = await this.authModel.findOne({ email: dto.email });

    if (!user || user.passwordHash !== dto.password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return { email: user.email };
  }
}
