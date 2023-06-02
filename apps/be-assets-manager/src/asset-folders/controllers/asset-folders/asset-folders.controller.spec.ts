import { Test, TestingModule } from '@nestjs/testing';
import { AssetFoldersController } from './asset-folders.controller';

describe('AssetFoldersController', () => {
  let controller: AssetFoldersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetFoldersController],
    }).compile();

    controller = module.get<AssetFoldersController>(AssetFoldersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
