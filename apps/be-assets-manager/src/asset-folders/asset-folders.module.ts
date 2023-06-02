import { Module } from '@nestjs/common';
import { AssetFoldersController } from './controllers/asset-folders/asset-folders.controller';

@Module({
  controllers: [AssetFoldersController],
})
export class AssetFoldersModule {}
