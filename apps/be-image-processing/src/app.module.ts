import { Module } from '@nestjs/common';

import { OptimisationModule } from './optimisation/optimisation.module';
import { BullModule } from '@nestjs/bull';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QueueConfig, loadQueueConfig } from '@be-queue';

@Module({
  imports: [
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
    OptimisationModule,
  ],
})
export class AppModule {}
