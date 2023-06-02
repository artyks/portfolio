import { Module } from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { AssetFoldersModule } from './asset-folders/asset-folders.module';

@Module({
  imports: [AssetsModule, AssetFoldersModule],
})
export class AppModule {}
