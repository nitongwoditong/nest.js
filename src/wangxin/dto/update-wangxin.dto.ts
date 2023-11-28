import { PartialType } from '@nestjs/mapped-types';
import { CreateWangxinDto } from './create-wangxin.dto';

export class UpdateWangxinDto extends PartialType(CreateWangxinDto) {}
