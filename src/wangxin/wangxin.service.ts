import { Injectable, Req, Res } from '@nestjs/common';
import { CreateWangxinDto } from './dto/create-wangxin.dto';
import { UpdateWangxinDto } from './dto/update-wangxin.dto';
import * as svgCaptcha from 'svg-captcha';

@Injectable()
export class WangxinService {
  checkCode(req, res, body) {
    if (
      req.session.code.toLocaleLowerCase() === body.code.toLocaleLowerCase()
    ) {
      res.send({
        code: 200,
        msg: '验证码正确',
      });
    } else {
      res.send({
        code: 400,
        msg: '验证码错误',
      });
    }
    // console.log(res);
    // return 'This action adds a new wangxin';
  }

  getCode(req, res) {
    const captcha = svgCaptcha.create({
      size: 4, //生成几个验证码
      fontSize: 50, //文字大小
      width: 100, //宽度
      height: 34, //高度
      background: '#cc9966', //背景颜色
    });
    req.session.code = captcha.text; //存储验证码记录到session
    console.log('session', req.session.code);
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  findOne(id: number) {
    return `This action returns a #${id} wangxin`;
  }

  update(id: number, updateWangxinDto: UpdateWangxinDto) {
    return `This action updates a #${id} wangxin`;
  }

  remove(id: number) {
    return `This action removes a #${id} wangxin`;
  }
}
