import { Module, Global } from '@nestjs/common';
import { PagesPrismaReadModelClient } from './pages-read-model.client';

@Global()
@Module({
  providers: [PagesPrismaReadModelClient],
  exports: [PagesPrismaReadModelClient],
})
class PagesReadModule {}

export { PagesReadModule };
