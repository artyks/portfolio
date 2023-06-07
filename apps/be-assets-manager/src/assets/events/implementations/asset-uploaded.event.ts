import { UploadAssetDto } from '@be-assets-manager/dtos';
import { IEvent } from '@nestjs/cqrs';

class AssetUploadedEvent implements IEvent {
  constructor(public readonly payload: UploadAssetDto) {}
}

export { AssetUploadedEvent };
