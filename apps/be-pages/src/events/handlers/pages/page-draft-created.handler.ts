import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PAGE_DOMAIN_NAME, PAGE_DRAFT_CREATED_EVENT_TYPE } from '@be-pages/constants';
import { EsPageDraftCreatedEvent } from '@be-pages/types';
import { logError } from '@common/utility';
import { PageDraftCreatedEvent } from '../../implementations/pages/page-draft-created.event';

@EventsHandler(PageDraftCreatedEvent)
class PageDraftCreatedHandler implements IEventHandler<PageDraftCreatedEvent> {
  constructor(private readonly eventStoreService: EventStoreService) {}

  async handle({ payload }: PageDraftCreatedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.id);
      const esEvent = jsonEvent<EsPageDraftCreatedEvent>({ type: PAGE_DRAFT_CREATED_EVENT_TYPE, data: payload });
      this.eventStoreService.appendToStream(streamName, esEvent);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageDraftCreatedHandler };
