import { Module } from '@nestjs/common';
import { AssetsManagerController } from './assets-manager.controller';
import { ClientsModule } from '@nestjs/microservices';
import { getAssetsManagerClient } from '@be-assets-manager/utility';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ClientsModule.register([getAssetsManagerClient()]), HttpModule],
  controllers: [AssetsManagerController],
})
export class AssetsManagerModule {}
