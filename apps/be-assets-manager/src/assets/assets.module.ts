import { Module } from '@nestjs/common';
import { AssetsController } from './controllers/assets/assets.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AssetsWriteModule } from '@prisma-clients/assets-write-model';
import { ConfigModule } from '@nestjs/config';
import { loadAssetsManagerConfig } from './config/config';
import { StorageService } from './services/storage.service';
import { CommandHandlers } from './commands/handlers';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [loadAssetsManagerConfig],
    }),
    CqrsModule,
    AssetsWriteModule,
  ],
  controllers: [AssetsController],
  providers: [StorageService, ...CommandHandlers],
})
export class AssetsModule {}
