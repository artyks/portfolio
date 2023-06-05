import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AssetsPrismaWriteModelClient } from '@prisma-clients/assets-write-model';
import { AssetModel as Asset } from '../../models/asset.model';
import { UploadAssetCommand } from '../implementations/upload-asset.command';
import { StorageService } from '../../services/storage.service';

@CommandHandler(UploadAssetCommand)
class UploadAssetHandler implements ICommandHandler<UploadAssetCommand> {
  assetRepository: AssetsPrismaWriteModelClient['asset'];

  constructor(
    assetsPrismaClient: AssetsPrismaWriteModelClient,
    private readonly publisher: EventPublisher,
    private readonly storageService: StorageService,
  ) {
    this.assetRepository = assetsPrismaClient.asset;
  }

  async execute({ payload }: UploadAssetCommand) {
    const AssetModel = this.publisher.mergeClassContext(Asset);
    const assetModel = new AssetModel(payload);
    if (assetModel.isImage()) {
      // const optimisedBuffer = await this.service.optimiseAsset()
      // assetModel.setOptimsedBuffer(optimisedBuffer)
    }
    const { url } = await this.storageService.upload(assetModel.getUploadInput());
    assetModel.setUrl(url);
    await this.assetRepository.create({ data: assetModel.getAssetCreateInput() });
    assetModel.commit();
  }
}

export { UploadAssetHandler };
