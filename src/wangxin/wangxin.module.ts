import { Module } from '@nestjs/common';
import { WangxinService } from './wangxin.service';
import { WangxinController } from './wangxin.controller';

@Module({
  controllers: [WangxinController],
  providers: [WangxinService],
})
export class WangxinModule {}
