import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PAGE_DOMAIN_NAME, PAGE_PUBLISHED_EVENT_GLOBAL, PAGE_PUBLISHED_EVENT_TYPE } from '@be-pages/constants';
import { EsPagePublishedEvent } from '@be-pages/types';
import { logError } from '@common/utility';
import { PagePublishedEvent } from '../../implementations/pages/page-published.event';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';

@EventsHandler(PagePublishedEvent)
class PagePublishedHandler implements IEventHandler<PagePublishedEvent> {
  constructor(
    private readonly eventStoreService: EventStoreService,
    @Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy,
  ) {}

  async handle({ payload }: PagePublishedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.id);
      const esEvent = jsonEvent<EsPagePublishedEvent>({ type: PAGE_PUBLISHED_EVENT_TYPE, data: { id: payload.id } });
      this.eventStoreService.appendToStream(streamName, esEvent);
      this.globalEventBus.emit(PAGE_PUBLISHED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { PagePublishedHandler };
