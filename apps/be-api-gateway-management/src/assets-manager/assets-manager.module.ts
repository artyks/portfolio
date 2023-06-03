import { Module } from '@nestjs/common';
import { AssetsManagerController } from './assets-manager.controller';
import { ClientsModule } from '@nestjs/microservices';
import { getAssetsManagerClient } from '@be-assets-manager/utility';

@Module({
  imports: [ClientsModule.register([getAssetsManagerClient()])],
  controllers: [AssetsManagerController],
})
export class AssetsManagerModule {}
