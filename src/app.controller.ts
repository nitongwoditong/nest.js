import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //Controller 只需要被注入，所以 nest 单独给它加了 @Controller 的装饰器。
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 或者通过下面这种属性的方式声明依赖
  // @Inject(AppService)
  // private appService: AppService;
  @Inject('person')
  private readonly person: { name: string; age: number };
  @Inject('person5')
  private readonly person5: { name: string; desc: string };
  @Get()
  getHello(): string {
    console.log(this.person);
    console.log(this.person5);
    return this.appService.getHello();
  }
  @Get('getapp')
  getApp(): number {
    return this.appService.getApp();
  }
}
