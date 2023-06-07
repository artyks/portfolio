import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PageArchivedEvent } from '../../implementations/pages/page-archived.event';
import { PAGE_ARCHIVED_EVENT_TYPE, PAGE_DOMAIN_NAME } from '@be-pages/constants';
import { EsPageArchivedEvent } from '@be-pages/types';
import { logError } from '@common/utility';

@EventsHandler(PageArchivedEvent)
class PageArchivedHandler implements IEventHandler<PageArchivedEvent> {
  constructor(private readonly eventStoreService: EventStoreService) {}

  async handle({ payload: { id } }: PageArchivedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, id);
      const esEvent = jsonEvent<EsPageArchivedEvent>({ type: PAGE_ARCHIVED_EVENT_TYPE, data: { id } });
      this.eventStoreService.appendToStream(streamName, esEvent);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageArchivedHandler };
