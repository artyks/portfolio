import { UploadAssetDto } from '@be-assets-manager/dtos';
import { IEvent } from '@nestjs/cqrs';

const ASSET_UPLOADED_EVENT_GLOBAL = 'ASSET_UPLOADED_EVENT_GLOBAL';

class AssetUploadedEvent implements IEvent {
  constructor(public readonly payload: UploadAssetDto) {}
}

export { AssetUploadedEvent, ASSET_UPLOADED_EVENT_GLOBAL };
