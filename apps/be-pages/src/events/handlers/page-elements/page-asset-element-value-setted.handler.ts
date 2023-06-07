import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_TYPE, PAGE_DOMAIN_NAME } from '@be-pages/constants';
import { EsPageAssetElementValueSettedEvent } from '@be-pages/types';
import { logError } from '@common/utility';
import { PageAssetElementValueSettedEvent } from '../../implementations/page-elements/page-asset-element-value-setted.event';

@EventsHandler(PageAssetElementValueSettedEvent)
class PageAssetElementValueSettedHandler implements IEventHandler<PageAssetElementValueSettedEvent> {
  constructor(private readonly eventStoreService: EventStoreService) {}

  async handle({ payload }: PageAssetElementValueSettedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.pageId);
      const esEvent = jsonEvent<EsPageAssetElementValueSettedEvent>({
        type: PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_TYPE,
        data: payload,
      });
      this.eventStoreService.appendToStream(streamName, esEvent);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageAssetElementValueSettedHandler };
