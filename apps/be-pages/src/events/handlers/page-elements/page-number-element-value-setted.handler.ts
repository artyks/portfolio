import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import {
  PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  PAGE_DOMAIN_NAME,
  PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
} from '@be-pages/constants';
import { logError } from '@common/utility';
import { EsPageNumberElementValueSettedEvent } from '@be-pages/types';
import { PageNumberElementValueSettedEvent } from '../../implementations/page-elements/page-number-element-value-setted.event';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@EventsHandler(PageNumberElementValueSettedEvent)
class PageNumberElementValueSettedHandler implements IEventHandler<PageNumberElementValueSettedEvent> {
  constructor(
    private readonly eventStoreService: EventStoreService,
    @Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy,
  ) {}

  async handle({ payload }: PageNumberElementValueSettedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.pageId);
      const esEvent = jsonEvent<EsPageNumberElementValueSettedEvent>({
        type: PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_TYPE,
        data: payload,
      });
      this.eventStoreService.appendToStream(streamName, esEvent);
      this.globalEventBus.emit(PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageNumberElementValueSettedHandler };
