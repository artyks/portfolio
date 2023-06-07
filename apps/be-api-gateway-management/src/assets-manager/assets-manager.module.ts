import { Module } from '@nestjs/common';
import { AssetsManagerController } from './assets-manager.controller';
import { ClientsModule } from '@nestjs/microservices';
import { getAssetsManagerClient } from '@be-assets-manager/utility';
import { StorageModule } from '@storage';

@Module({
  imports: [ClientsModule.register([getAssetsManagerClient()]), StorageModule],
  controllers: [AssetsManagerController],
})
export class AssetsManagerModule {}
