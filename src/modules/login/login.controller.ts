import { Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { LocalAuthGuard } from 'src/common/guards/local-auth.guard';
import { Request } from 'express';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  // @UseGuards(LocalAuthGuard)
  async login(@Req() req: Request) {
    return await this.loginService.login(req);
  }

  // 获取用户信息
  // @Get('getInfo')
  // async getInfo(@User )
}
