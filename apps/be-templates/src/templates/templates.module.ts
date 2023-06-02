import { Module } from '@nestjs/common';
import { TemplatesController } from './controllers/templates.controller';

@Module({
  controllers: [TemplatesController],
})
export class TemplatesModule {}
