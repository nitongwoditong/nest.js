import { Injectable, Inject } from '@nestjs/common';

@Injectable() // Service 是可以被注入也是可以注入到别的对象的，所以用 @Injectable 声明
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  // 被注入
  // @Inject(OtherService)
  // private otherService:OtherService;

  getApp(): number {
    return 369;
  }
}
