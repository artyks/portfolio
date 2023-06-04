import { Module } from '@nestjs/common';
import { PageElementsCommandController } from './controllers/page-elements-command/page-elements-command.controller';
import { PagesCommandController } from './controllers/pages-command/pages-command.controller';
import { PagesDraftsQueryController } from './controllers/pages-drafts-query/pages-drafts-query.controller';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [PageElementsCommandController, PagesCommandController, PagesDraftsQueryController],
})
export class AppModule {}
