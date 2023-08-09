import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { Injectable, Inject } from '@nestjs/common';
import { SharedService } from 'src/shared/shared.service';
import { Payload } from './login.interace';
import { Request } from 'express';

@Injectable()
export class LoginService {
  constructor() {}

  // 登录
  async login(request: Request) {
    const { user } = request as any;
    const payLoad: Payload = { userId: user.userId, pv: 1 };
    return {
      token: '12',
    };
  }
}
