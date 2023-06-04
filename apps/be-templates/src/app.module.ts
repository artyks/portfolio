import { Module } from '@nestjs/common';
import { TemplatesController } from './controllers/templates.controller';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [TemplatesController],
})
export class AppModule {}
