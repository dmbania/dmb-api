import { Test, TestingModule } from '@nestjs/testing';
import { DmbController } from './dmb.controller';

describe('DmbController', () => {
  let controller: DmbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DmbController],
    }).compile();

    controller = module.get<DmbController>(DmbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
