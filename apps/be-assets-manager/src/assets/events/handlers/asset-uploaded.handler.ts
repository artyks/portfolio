import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { logError } from '@common/utility';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';
import { ASSET_UPLOADED_EVENT_GLOBAL, AssetUploadedEvent } from '../implementations/asset-uploaded.event';

@EventsHandler(AssetUploadedEvent)
class AssetUploadedHandler implements IEventHandler<AssetUploadedEvent> {
  constructor(@Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy) {}

  async handle({ payload }: AssetUploadedEvent) {
    try {
      this.globalEventBus.emit(ASSET_UPLOADED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { AssetUploadedHandler };
