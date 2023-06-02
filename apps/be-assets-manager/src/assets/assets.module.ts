import { Module } from '@nestjs/common';
import { AssetsController } from './controllers/assets/assets.controller';

@Module({
  controllers: [AssetsController],
})
export class AssetsModule {}
