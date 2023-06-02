import { Test, TestingModule } from '@nestjs/testing';
import { PageElementsCommandController } from './page-elements-command.controller';

describe('PageElementsCommandController', () => {
  let controller: PageElementsCommandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageElementsCommandController],
    }).compile();

    controller = module.get<PageElementsCommandController>(PageElementsCommandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
