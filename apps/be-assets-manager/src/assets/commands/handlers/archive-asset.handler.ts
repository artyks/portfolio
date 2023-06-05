import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AssetsPrismaWriteModelClient } from '@prisma-clients/assets-write-model';
import { AssetModel as Asset } from '../../models/asset.model';
import { ArchiveAssetCommand } from '../implementations/archive-asset.command';

@CommandHandler(ArchiveAssetCommand)
class ArchiveAssetHandler implements ICommandHandler<ArchiveAssetCommand> {
  assetRepository: AssetsPrismaWriteModelClient['asset'];

  constructor(assetsPrismaClient: AssetsPrismaWriteModelClient, private readonly publisher: EventPublisher) {
    this.assetRepository = assetsPrismaClient.asset;
  }

  async execute({ payload: { id } }: ArchiveAssetCommand) {
    const assetCurrent = await this.assetRepository.findUniqueOrThrow({ where: { id } });
    const AssetModel = this.publisher.mergeClassContext(Asset);
    const assetModel = new AssetModel(assetCurrent);
    assetModel.archiveAsset();
    await this.assetRepository.update(assetModel.getAssetUpdate());
    assetModel.commit();
  }
}

export { ArchiveAssetHandler };
