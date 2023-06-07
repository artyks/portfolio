import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { logError } from '@common/utility';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';
import { AssetArchivedEvent } from '../implementations/asset-archived.event';
import { ASSET_ARCHIVED_EVENT_GLOBAL } from '@be-assets-manager/constants';

@EventsHandler(AssetArchivedEvent)
class AssetArchivedHandler implements IEventHandler<AssetArchivedEvent> {
  constructor(@Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy) {}

  async handle({ payload }: AssetArchivedEvent) {
    try {
      this.globalEventBus.emit(ASSET_ARCHIVED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { AssetArchivedHandler };
