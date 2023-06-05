import { Module } from '@nestjs/common';
import { TemplatesController } from './controllers/templates.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TemplateElementsService } from './services/template-elements.service';
import { TemplatesService } from './services/templates.service';
import { CommandHandlers } from './commands/handlers';
import { TemplatesPagesWriteModule } from '@prisma-clients/templates-pages-write-model';

@Module({
  imports: [CqrsModule, TemplatesPagesWriteModule],
  controllers: [TemplatesController],
  providers: [TemplatesService, TemplateElementsService, ...CommandHandlers],
})
export class AppModule {}
