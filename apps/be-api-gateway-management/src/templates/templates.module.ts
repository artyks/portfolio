import { Module } from '@nestjs/common';
import { TemplatesController } from './templates.controller';
import { ClientsModule } from '@nestjs/microservices';
import { getTemplatesClient } from '@be-templates/utility';

@Module({
  imports: [ClientsModule.register([getTemplatesClient()])],
  controllers: [TemplatesController],
})
export class TemplatesModule {}
