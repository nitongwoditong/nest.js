import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

const whiteList = ['/list'];
function middleWareAll(req, res, next) {
  if (!whiteList.includes(req.originalUrl)) {
    next();
  } else {
    res.send('被拦截');
  }
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
  await app.listen(3000);
}
bootstrap();
