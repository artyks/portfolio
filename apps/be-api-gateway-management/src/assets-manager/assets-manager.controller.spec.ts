import { Test, TestingModule } from '@nestjs/testing';
import { AssetsManagerController } from './assets-manager.controller';

describe('AssetsManagerController', () => {
  let controller: AssetsManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetsManagerController],
    }).compile();

    controller = module.get<AssetsManagerController>(AssetsManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
