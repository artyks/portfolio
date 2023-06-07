import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PAGE_DOMAIN_NAME, PAGE_PUBLISHED_EVENT_TYPE } from '@be-pages/constants';
import { EsPagePublishedEvent } from '@be-pages/types';
import { logError } from '@common/utility';
import { PagePublishedEvent } from '../../implementations/pages/page-published.event';

@EventsHandler(PagePublishedEvent)
class PagePublishedHandler implements IEventHandler<PagePublishedEvent> {
  constructor(private readonly eventStoreService: EventStoreService) {}

  async handle({ payload: { id } }: PagePublishedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, id);
      const esEvent = jsonEvent<EsPagePublishedEvent>({ type: PAGE_PUBLISHED_EVENT_TYPE, data: { id } });
      this.eventStoreService.appendToStream(streamName, esEvent);
    } catch (error) {
      logError(error);
    }
  }
}

export { PagePublishedHandler };
