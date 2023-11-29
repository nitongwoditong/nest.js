import { Injectable, NestMiddleware } from '@nestjs/common';

import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Logger implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    if (req.body.username.length < 5) {
      res.send({
        code: -1,
        message: '账号小于5个字符长度',
      });
    }
    next();
  }
}
