import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_TYPE, PAGE_DOMAIN_NAME } from '@be-pages/constants';
import { logError } from '@common/utility';
import { EsPageTextElementValueSettedEvent } from '@be-pages/types';
import { PageTextElementValueSettedEvent } from '../../implementations/page-elements/page-text-element-value-setted.event';

@EventsHandler(PageTextElementValueSettedEvent)
class PageTextElementValueSettedHandler implements IEventHandler<PageTextElementValueSettedEvent> {
  constructor(private readonly eventStoreService: EventStoreService) {}

  async handle({ payload }: PageTextElementValueSettedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.pageId);
      const esEvent = jsonEvent<EsPageTextElementValueSettedEvent>({
        type: PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_TYPE,
        data: payload,
      });
      this.eventStoreService.appendToStream(streamName, esEvent);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageTextElementValueSettedHandler };
