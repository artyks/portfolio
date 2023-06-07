import { ArchiveAssetDto } from '@be-assets-manager/dtos';
import { IEvent } from '@nestjs/cqrs';

class AssetArchivedEvent implements IEvent {
  constructor(public readonly payload: ArchiveAssetDto) {}
}

export { AssetArchivedEvent };
