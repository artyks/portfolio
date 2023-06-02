import { Test, TestingModule } from '@nestjs/testing';
import { PagesCommandController } from './pages-command.controller';

describe('PagesCommandController', () => {
  let controller: PagesCommandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagesCommandController],
    }).compile();

    controller = module.get<PagesCommandController>(PagesCommandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
