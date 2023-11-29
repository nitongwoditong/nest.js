import { Module, NestModule, MiddlewareConsumer, Global } from '@nestjs/common';
import { WangxinService } from './wangxin.service';
import { WangxinController } from './wangxin.controller';
import { Logger } from '../middleware/logger';

// @Global()  全局模块
@Module({
  controllers: [WangxinController],
  providers: [WangxinService],
})
export class WangxinModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes('/checkCode');
  }
}
