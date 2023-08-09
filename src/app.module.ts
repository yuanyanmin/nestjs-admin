import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [
    // 配置文件模块
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    // 业务模块
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
