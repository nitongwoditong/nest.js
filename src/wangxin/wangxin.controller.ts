import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query, Headers, HttpCode  } from '@nestjs/common';
import { WangxinService } from './wangxin.service';
import { CreateWangxinDto } from './dto/create-wangxin.dto';
import { UpdateWangxinDto } from './dto/update-wangxin.dto';

@Controller('wangxin')
export class WangxinController {
  constructor(private readonly wangxinService: WangxinService) {}

  @Post()
  create(@Body() body) {
    console.log(body);
    // return this.wangxinService.create(createWangxinDto);
    return 'This action adds a new wangxin';
  }

  @Get()
  findAll() {
    return this.wangxinService.findAll();
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
