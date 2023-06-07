import { Module } from '@nestjs/common';
import { AssetsController } from './controllers/assets/assets.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { AssetsWriteModule } from '@prisma-clients/assets-write-model';
import { CommandHandlers } from './commands/handlers';
import { StorageModule, StorageService } from '@storage';
import { BullModule } from '@nestjs/bull';
import { QueueConfig, loadQueueConfig } from '@be-queue';
import { IMAGE_PROCESSING_QUEUE_NAME } from '@be-image-processing/constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { getGlobalEventBusClient } from '@be-global-event-bus';
import { EventHandlers } from './events/handlers';

@Module({
  imports: [
    BullModule.registerQueue({
      name: IMAGE_PROCESSING_QUEUE_NAME,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule.forFeature(loadQueueConfig)],
      useFactory: async (configService: ConfigService<QueueConfig, true>) => ({
        redis: {
          host: configService.get('QUEUE_HOST', { infer: true }),
          port: configService.get('QUEUE_PORT', { infer: true }),
        },
      }),
      inject: [ConfigService],
    }),
    StorageModule,
    CqrsModule,
    AssetsWriteModule,
    ClientsModule.register([getGlobalEventBusClient()]),
  ],
  controllers: [AssetsController],
  providers: [StorageService, ...CommandHandlers, ...EventHandlers],
})
class AssetsModule {}

export { AssetsModule };
