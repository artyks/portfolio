import { Test, TestingModule } from '@nestjs/testing';
import { PagesDraftsQueryController } from './pages-drafts-query.controller';

describe('PagesDraftsQueryController', () => {
  let controller: PagesDraftsQueryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PagesDraftsQueryController],
    }).compile();

    controller = module.get<PagesDraftsQueryController>(PagesDraftsQueryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
