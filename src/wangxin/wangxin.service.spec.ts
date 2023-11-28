import { Test, TestingModule } from '@nestjs/testing';
import { WangxinService } from './wangxin.service';

describe('WangxinService', () => {
  let service: WangxinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WangxinService],
    }).compile();

    service = module.get<WangxinService>(WangxinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
