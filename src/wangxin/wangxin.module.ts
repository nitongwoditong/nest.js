import { Module, NestModule, MiddlewareConsumer, Global } from '@nestjs/common';
import { WangxinService } from './wangxin.service';
import { WangxinController } from './wangxin.controller';
import { Logger } from '../middleware/logger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wangxin } from './entities/wangxin.entity';

// @Global()  全局模块
@Module({
  imports: [TypeOrmModule.forFeature([Wangxin])],
  controllers: [WangxinController],
  providers: [WangxinService],
})
export class WangxinModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger).forRoutes('/checkCode');
  }
}
