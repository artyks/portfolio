import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import {
  PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  PAGE_DOMAIN_NAME,
} from '@be-pages/constants';
import { EsPageAssetElementValueSettedEvent } from '@be-pages/types';
import { logError } from '@common/utility';
import { PageAssetElementValueSettedEvent } from '../../implementations/page-elements/page-asset-element-value-setted.event';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';

@EventsHandler(PageAssetElementValueSettedEvent)
class PageAssetElementValueSettedHandler implements IEventHandler<PageAssetElementValueSettedEvent> {
  constructor(
    private readonly eventStoreService: EventStoreService,
    @Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy,
  ) {}

  async handle({ payload }: PageAssetElementValueSettedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.pageId);
      const esEvent = jsonEvent<EsPageAssetElementValueSettedEvent>({
        type: PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_TYPE,
        data: payload,
      });
      this.eventStoreService.appendToStream(streamName, esEvent);
      this.globalEventBus.emit(PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageAssetElementValueSettedHandler };
