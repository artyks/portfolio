import { ArchiveAssetDto } from '@be-assets-manager/dtos';
import { IEvent } from '@nestjs/cqrs';

const ASSET_ARCHIVED_EVENT_GLOBAL = 'ASSET_ARCHIVED_EVENT_GLOBAL';

class AssetArchivedEvent implements IEvent {
  constructor(public readonly payload: ArchiveAssetDto) {}
}

export { AssetArchivedEvent, ASSET_ARCHIVED_EVENT_GLOBAL };
