import { Module, Global } from '@nestjs/common';
import { TemplatesPagesPrismaWriteModelClient } from './templates-pages-write-model.client';

@Global()
@Module({
  providers: [TemplatesPagesPrismaWriteModelClient],
  exports: [TemplatesPagesPrismaWriteModelClient],
})
class TemplatesPagesWriteModule {}

export { TemplatesPagesWriteModule };
