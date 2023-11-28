import { Injectable } from '@nestjs/common';
import { CreateWangxinDto } from './dto/create-wangxin.dto';
import { UpdateWangxinDto } from './dto/update-wangxin.dto';
import * as svgCaptcha from 'svg-captcha';

@Injectable()
export class WangxinService {
  create(createWangxinDto: CreateWangxinDto) {
    return 'This action adds a new wangxin';
  }

  getCode() {
    
    return `This action returns all wangxin`;
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
