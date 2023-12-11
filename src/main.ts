import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';
import { NestExpressApplication } from '@nestjs/platform-express';
// import { LoginGuard } from './login.guard';

// 增加白名单之类的东西
const whiteList = ['/list'];
function middleWareAll(req, res, next) {
  if (!whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send('被拦截');
  }
}
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'Wangxin',
      name: 'xm.session',
      rolling: true,
      cookie: { maxAge: null },
    }),
  );
  app.useGlobalPipes(new ValidationPipe());
  app.use(middleWareAll);
  app.use(cors());
  app.useStaticAssets('public', { prefix: '/static' }); //读取静态资源
  // app.useGlobalGuards(new LoginGuard()); // 全局路由守卫
  await app.listen(3000);
}
bootstrap();
