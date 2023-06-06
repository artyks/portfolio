import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

import { OptimisationService } from './optimisation.service';
import { IMAGE_PROCESSING_QUEUE_NAME } from '@be-image-processing/constants';
import { ImageOptimisationProcessor } from './optimisation.processor';
import { StorageModule } from '@storage';

@Module({
  imports: [
    BullModule.registerQueue({
      name: IMAGE_PROCESSING_QUEUE_NAME,
    }),
    StorageModule,
  ],
  providers: [OptimisationService, ImageOptimisationProcessor],
})
class OptimisationModule {}

export { OptimisationModule };
