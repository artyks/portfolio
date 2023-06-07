import { Module } from '@nestjs/common';
import { TemplatesController } from './controllers/templates.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TemplateElementsService } from './services/template-elements.service';
import { TemplatesService } from './services/templates.service';
import { CommandHandlers } from './commands/handlers';
import { TemplatesPagesWriteModule } from '@prisma-clients/templates-pages-write-model';
import { EventHandlers } from './events/handlers';
import { ClientsModule } from '@nestjs/microservices';
import { getGlobalEventBusClient } from '@be-global-event-bus';

@Module({
  imports: [CqrsModule, TemplatesPagesWriteModule, ClientsModule.register([getGlobalEventBusClient()])],
  controllers: [TemplatesController],
  providers: [TemplatesService, TemplateElementsService, ...CommandHandlers, ...EventHandlers],
})
export class AppModule {}
