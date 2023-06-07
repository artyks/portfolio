import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import { PAGE_DOMAIN_NAME, PAGE_UNPUBLISHED_EVENT_GLOBAL, PAGE_UNPUBLISHED_EVENT_TYPE } from '@be-pages/constants';
import { logError } from '@common/utility';
import { PageUnpublishedEvent } from '../../implementations/pages/page-unpublished.event';
import { EsPageUnpublishedEvent } from '@be-pages/types';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';

@EventsHandler(PageUnpublishedEvent)
class PageUnpublishedHandler implements IEventHandler<PageUnpublishedEvent> {
  constructor(
    private readonly eventStoreService: EventStoreService,
    @Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy,
  ) {}

  async handle({ payload }: PageUnpublishedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.id);
      const esEvent = jsonEvent<EsPageUnpublishedEvent>({
        type: PAGE_UNPUBLISHED_EVENT_TYPE,
        data: { id: payload.id },
      });
      this.eventStoreService.appendToStream(streamName, esEvent);
      this.globalEventBus.emit(PAGE_UNPUBLISHED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageUnpublishedHandler };
