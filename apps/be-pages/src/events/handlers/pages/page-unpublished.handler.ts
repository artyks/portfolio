import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PAGE_DOMAIN_NAME, PAGE_UNPUBLISHED_EVENT_TYPE } from '@be-pages/constants';
import { logError } from '@common/utility';
import { PageUnpublishedEvent } from '../../implementations/pages/page-unpublished.event';
import { EsPageUnpublishedEvent } from '@be-pages/types';

@EventsHandler(PageUnpublishedEvent)
class PageUnpublishedHandler implements IEventHandler<PageUnpublishedEvent> {
  constructor(private readonly eventStoreService: EventStoreService) {}

  async handle({ payload: { id } }: PageUnpublishedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, id);
      const esEvent = jsonEvent<EsPageUnpublishedEvent>({ type: PAGE_UNPUBLISHED_EVENT_TYPE, data: { id } });
      this.eventStoreService.appendToStream(streamName, esEvent);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageUnpublishedHandler };
