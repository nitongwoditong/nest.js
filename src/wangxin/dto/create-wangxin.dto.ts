import { IsString, IsNotEmpty } from 'class-validator';
export class CreateWangxinDto {
  // @IsString()
  // username: string;
  // @IsString()
  // password: string;
  // @IsString()
  @IsNotEmpty()
  code: string;
}
