import { Controller } from '@nestjs/common';
import { NotificationsService } from '../notifications.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ASSET_ARCHIVED_EVENT_GLOBAL, ASSET_UPLOADED_EVENT_GLOBAL } from '@be-assets-manager/constants';
import { ArchiveAssetDto, UploadAssetDto } from '@be-assets-manager/dtos';

@Controller()
class InternalAssetsManagerController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @EventPattern(ASSET_ARCHIVED_EVENT_GLOBAL)
  async handleAssetArchived(@Payload() payload: ArchiveAssetDto) {
    // TODO: add userId in payload (extend from BaseDto that handles userId and reqId?)
    // this.notificationsService.notify(userId, { ...payload, eventName: ASSET_ARCHIVED_EVENT_GLOBAL });
  }

  @EventPattern(ASSET_UPLOADED_EVENT_GLOBAL)
  async handleAssetUploaded(@Payload() payload: UploadAssetDto) {
    // TODO: add userId in payload (extend from BaseDto that handles userId and reqId?)
    // this.notificationsService.notify(userId, { ...payload, eventName: ASSET_ARCHIVED_EVENT_GLOBAL });
  }
}

export { InternalAssetsManagerController };
