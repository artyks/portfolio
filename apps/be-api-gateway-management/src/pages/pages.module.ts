import { Module } from '@nestjs/common';
import { PagesDraftsQueryController } from './controllers/pages-drafts-query/pages-drafts-query.controller';
import { PagesCommandController } from './controllers/pages-command/pages-command.controller';
import { PageElementsCommandController } from './controllers/page-elements-command/page-elements-command.controller';

@Module({
  controllers: [PagesCommandController, PagesDraftsQueryController, PageElementsCommandController],
})
export class PagesModule {}
