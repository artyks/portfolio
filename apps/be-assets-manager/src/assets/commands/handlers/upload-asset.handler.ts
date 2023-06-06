import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AssetsPrismaWriteModelClient } from '@prisma-clients/assets-write-model';
import { AssetModel as Asset } from '../../models/asset.model';
import { UploadAssetCommand } from '../implementations/upload-asset.command';
import { StorageService } from '@storage';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { IMAGE_PROCESSING_QUEUE_NAME, IMAGE_PROCESSING_OPTIMISATION_JOB } from '@be-image-processing/constants';
import { OptimisationJobInput, OptimisationJobResult } from '@be-image-processing/types';

@CommandHandler(UploadAssetCommand)
class UploadAssetHandler implements ICommandHandler<UploadAssetCommand> {
  assetRepository: AssetsPrismaWriteModelClient['asset'];

  constructor(
    assetsPrismaClient: AssetsPrismaWriteModelClient,
    private readonly publisher: EventPublisher,
    private readonly storageService: StorageService,
    @InjectQueue(IMAGE_PROCESSING_QUEUE_NAME) private readonly imageProcessingQueue: Queue<OptimisationJobInput>,
  ) {
    this.assetRepository = assetsPrismaClient.asset;
  }

  async execute({ payload }: UploadAssetCommand) {
    /** Merge asset model with event publisher */
    const AssetModel = this.publisher.mergeClassContext(Asset);

    /** Init asset */
    const assetModel = new AssetModel();
    assetModel.initAssetFromUploadDto(payload);

    /** Handle image optimisation */
    if (assetModel.isImage()) {
      const uploadInput = assetModel.getUploadInput();

      /** Upload image to temporary storage to allow queue processor retrieve it later */
      await this.storageService.uploadTemp(uploadInput);

      /** Send asset to image optimisation queue */
      const job = await this.imageProcessingQueue.add(IMAGE_PROCESSING_OPTIMISATION_JOB, {
        blobName: uploadInput.blobName,
        mimetype: uploadInput.mimetype,
      });

      const { status, blobName: blobNameOptimised } = (await job.finished()) as OptimisationJobResult;
      if (status === 'SUCCESS') {
        /** Retrieve optimised asset */
        const { buffer: optimisedBuffer } = await this.storageService.downloadTemp({ blobName: blobNameOptimised });
        assetModel.setBuffer(optimisedBuffer);
      }
    }

    /** Upload asset to public storage */
    const { url } = await this.storageService.uploadPublic(assetModel.getUploadInput());
    assetModel.setUrl(url);

    /** Persist asset in database */
    await this.assetRepository.create({ data: assetModel.getAssetCreateInput() });

    /** Fire applied events */
    assetModel.commit();
  }
}

export { UploadAssetHandler };
