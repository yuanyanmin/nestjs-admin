import { Module, Global } from '@nestjs/common';
import { SharedService } from './shared.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@nestjs-modules/ioredis';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    // 连接mysql数据库
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        type: configService.get<any>('database.type'),
        host: configService.get<any>('database.host'),
        port: configService.get<any>('database.port'),
        username: configService.get<any>('database.username'),
        password: configService.get<any>('database.password'),
        database: configService.get<any>('database.database'),
        autoLoadModels: configService.get<any>('database.autoLoadModels'),
        synchronize: configService.get<any>('database.synchronize'),
        logging: configService.get<any>('database.logging'),
      }),
      inject: [ConfigService],
    }),
    // 连接redis
    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        configService.get<any>('redis'),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [SharedService],
  exports: [SharedService], // 导出哪些服务
})
export class SharedModule {}
