import { Test, TestingModule } from '@nestjs/testing';
import { WangxinController } from './wangxin.controller';
import { WangxinService } from './wangxin.service';

describe('WangxinController', () => {
  let controller: WangxinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WangxinController],
      providers: [WangxinService],
    }).compile();

    controller = module.get<WangxinController>(WangxinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
