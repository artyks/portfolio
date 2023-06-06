import { Module } from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { AssetFoldersModule } from './asset-folders/asset-folders.module';
import { ConfigModule } from '@nestjs/config';
import { loadAssetsConfig } from './config/load-config';

@Module({
  imports: [ConfigModule.forFeature(loadAssetsConfig), AssetsModule, AssetFoldersModule],
})
export class AppModule {}
