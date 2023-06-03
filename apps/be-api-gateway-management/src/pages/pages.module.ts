import { Module } from '@nestjs/common';
import { PagesDraftsQueryController } from './controllers/pages-drafts-query/pages-drafts-query.controller';
import { PagesCommandController } from './controllers/pages-command/pages-command.controller';
import { PageElementsCommandController } from './controllers/page-elements-command/page-elements-command.controller';
import { ClientsModule } from '@nestjs/microservices';
import { getPagesClient } from '@be-pages/utility';

@Module({
  imports: [ClientsModule.register([getPagesClient()])],
  controllers: [PagesCommandController, PagesDraftsQueryController, PageElementsCommandController],
})
export class PagesModule {}
