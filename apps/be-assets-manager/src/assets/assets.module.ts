import { Module } from '@nestjs/common';
import { AssetsController } from './controllers/assets/assets.controller';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [AssetsController],
})
export class AssetsModule {}
