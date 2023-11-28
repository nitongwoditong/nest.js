import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WangxinModule } from './wangxin/wangxin.module';

@Module({
  imports: [WangxinModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
