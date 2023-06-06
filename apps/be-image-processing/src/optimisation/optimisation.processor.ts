import { IMAGE_PROCESSING_QUEUE_NAME, IMAGE_PROCESSING_OPTIMISATION_JOB } from '@be-image-processing/constants';
import { OptimisationJob, OptimisationJobResult } from '@be-image-processing/types';
import { Process, Processor } from '@nestjs/bull';
import { StorageService } from '@storage';
import { OptimisationService } from './optimisation.service';

@Processor(IMAGE_PROCESSING_QUEUE_NAME)
class ImageOptimisationProcessor {
  constructor(
    private readonly storageService: StorageService,
    private readonly optimisationService: OptimisationService,
  ) {}

  @Process(IMAGE_PROCESSING_OPTIMISATION_JOB)
  async handleOptimisation({ data: { blobName, mimetype } }: OptimisationJob): Promise<OptimisationJobResult> {
    try {
      const { buffer } = await this.storageService.downloadTemp({ blobName });
      const optimisedBuffer = await this.optimisationService.optimiseImage(buffer, { mimetype });
      if (!optimisedBuffer) {
        throw new Error();
      }
      await this.storageService.uploadTemp({ blobName, buffer: optimisedBuffer, mimetype });
      return { status: 'SUCCESS', blobName };
    } catch (_) {
      return { status: 'FAILED', blobName };
    }
  }
}

export { ImageOptimisationProcessor };
