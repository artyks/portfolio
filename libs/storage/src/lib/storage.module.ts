import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { ConfigModule } from '@nestjs/config';
import { loadAssetsManagerConfig } from './config/config';

@Module({
  imports: [ConfigModule.forFeature(loadAssetsManagerConfig)],
  providers: [StorageService],
  exports: [StorageService, ConfigModule],
})
class StorageModule {}

export { StorageModule };
