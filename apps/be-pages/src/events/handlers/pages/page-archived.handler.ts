import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PageArchivedEvent } from '../../implementations/pages/page-archived.event';
import { PAGE_ARCHIVED_EVENT_GLOBAL, PAGE_ARCHIVED_EVENT_TYPE, PAGE_DOMAIN_NAME } from '@be-pages/constants';
import { EsPageArchivedEvent } from '@be-pages/types';
import { logError } from '@common/utility';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';

@EventsHandler(PageArchivedEvent)
class PageArchivedHandler implements IEventHandler<PageArchivedEvent> {
  constructor(
    private readonly eventStoreService: EventStoreService,
    @Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy,
  ) {}

  async handle({ payload }: PageArchivedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.id);
      const esEvent = jsonEvent<EsPageArchivedEvent>({ type: PAGE_ARCHIVED_EVENT_TYPE, data: { ...payload } });
      this.eventStoreService.appendToStream(streamName, esEvent);
      this.globalEventBus.emit(PAGE_ARCHIVED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageArchivedHandler };
