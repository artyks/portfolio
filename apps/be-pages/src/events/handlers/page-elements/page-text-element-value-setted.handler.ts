import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import {
  PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  PAGE_DOMAIN_NAME,
  PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
} from '@be-pages/constants';
import { logError } from '@common/utility';
import { EsPageTextElementValueSettedEvent } from '@be-pages/types';
import { PageTextElementValueSettedEvent } from '../../implementations/page-elements/page-text-element-value-setted.event';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';

@EventsHandler(PageTextElementValueSettedEvent)
class PageTextElementValueSettedHandler implements IEventHandler<PageTextElementValueSettedEvent> {
  constructor(
    private readonly eventStoreService: EventStoreService,
    @Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy,
  ) {}

  async handle({ payload }: PageTextElementValueSettedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.pageId);
      const esEvent = jsonEvent<EsPageTextElementValueSettedEvent>({
        type: PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_TYPE,
        data: payload,
      });
      this.eventStoreService.appendToStream(streamName, esEvent);
      this.globalEventBus.emit(PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageTextElementValueSettedHandler };
