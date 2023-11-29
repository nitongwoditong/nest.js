import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query, Headers, HttpCode, Req , Res  } from '@nestjs/common';
import { WangxinService } from './wangxin.service';
import { CreateWangxinDto } from './dto/create-wangxin.dto';
import { UpdateWangxinDto } from './dto/update-wangxin.dto';
@Controller('wangxin')
export class WangxinController {
  constructor(private readonly wangxinService: WangxinService) {}

  @Post('checkCode')
  checkCode(@Req() req, @Res() res, @Body() body: CreateWangxinDto) {
    // return this.wangxinService.create(createWangxinDto);
    return this.wangxinService.checkCode(req, res, body);
  }

  @Get('getCode')
  getCode(@Req() req, @Res() res) {
    return this.wangxinService.getCode(req, res);
  }

  @Get(':id')
  // @HttpCode(500)
  findOne(@Param('id') id: string) {
    return this.wangxinService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWangxinDto: UpdateWangxinDto) {
    return this.wangxinService.update(+id, updateWangxinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wangxinService.remove(+id);
  }
}
