import { Module } from '@nestjs/common';
import { PageElementsCommandController } from './controllers/page-elements-command/page-elements-command.controller';
import { PagesCommandController } from './controllers/pages-command/pages-command.controller';
import { PagesDraftsQueryController } from './controllers/pages-drafts-query/pages-drafts-query.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TemplatesPagesWriteModule } from '@prisma-clients/templates-pages-write-model';
import { CommandHandlers } from './commands/handlers';
import { EventStoreModule } from '@be-event-store';
import { EventHandlers } from './events/handlers';

@Module({
  imports: [CqrsModule, TemplatesPagesWriteModule, EventStoreModule],
  controllers: [PageElementsCommandController, PagesCommandController, PagesDraftsQueryController],
  providers: [...CommandHandlers, ...EventHandlers],
})
export class AppModule {}
