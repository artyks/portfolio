import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_TYPE, PAGE_DOMAIN_NAME } from '@be-pages/constants';
import { logError } from '@common/utility';
import { EsPageNumberElementValueSettedEvent } from '@be-pages/types';
import { PageNumberElementValueSettedEvent } from '../../implementations/page-elements/page-number-element-value-setted.event';

@EventsHandler(PageNumberElementValueSettedEvent)
class PageNumberElementValueSettedHandler implements IEventHandler<PageNumberElementValueSettedEvent> {
  constructor(private readonly eventStoreService: EventStoreService) {}

  async handle({ payload }: PageNumberElementValueSettedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.pageId);
      const esEvent = jsonEvent<EsPageNumberElementValueSettedEvent>({
        type: PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_TYPE,
        data: payload,
      });
      this.eventStoreService.appendToStream(streamName, esEvent);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageNumberElementValueSettedHandler };
