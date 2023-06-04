import { Module, Global } from '@nestjs/common';
import { AssetsPrismaWriteModelClient } from './assets-write-model.client';

@Global()
@Module({
  providers: [AssetsPrismaWriteModelClient],
  exports: [AssetsPrismaWriteModelClient],
})
class AssetsWriteModule {}

export { AssetsWriteModule };
