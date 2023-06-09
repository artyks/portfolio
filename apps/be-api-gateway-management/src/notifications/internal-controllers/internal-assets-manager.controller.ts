import { Controller } from '@nestjs/common';
import { NotificationsService } from '../notifications.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ASSET_ARCHIVED_EVENT_GLOBAL, ASSET_UPLOADED_EVENT_GLOBAL } from '@be-assets-manager/constants';
import { ArchiveAssetDto, UploadAssetDto } from '@be-assets-manager/dtos';

@Controller()
class InternalAssetsManagerController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @EventPattern(ASSET_ARCHIVED_EVENT_GLOBAL)
  handleAssetArchived(@Payload() { userId, requestId, ...payload }: ArchiveAssetDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: ASSET_ARCHIVED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(ASSET_UPLOADED_EVENT_GLOBAL)
  handleAssetUploaded(@Payload() { userId, requestId, ...payload }: UploadAssetDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: ASSET_UPLOADED_EVENT_GLOBAL, requestId },
    });
  }
}

export { InternalAssetsManagerController };
