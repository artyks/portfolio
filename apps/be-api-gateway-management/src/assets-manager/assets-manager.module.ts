import { Module } from '@nestjs/common';
import { AssetsManagerController } from './assets-manager.controller';

@Module({
  controllers: [AssetsManagerController],
})
export class AssetsManagerModule {}
