import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import {
  PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_TYPE,
  PAGE_DOMAIN_NAME,
} from '@be-pages/constants';
import { EsPageDateTimeElementValueSettedEvent } from '@be-pages/types';
import { logError } from '@common/utility';
import { PageDateTimeElementValueSettedEvent } from '../../implementations/page-elements/page-date-time-element-value-setted.event';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@EventsHandler(PageDateTimeElementValueSettedEvent)
class PageDateTimeElementValueSettedHandler implements IEventHandler<PageDateTimeElementValueSettedEvent> {
  constructor(
    private readonly eventStoreService: EventStoreService,
    @Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy,
  ) {}

  async handle({ payload }: PageDateTimeElementValueSettedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.pageId);
      const esEvent = jsonEvent<EsPageDateTimeElementValueSettedEvent>({
        type: PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_TYPE,
        data: payload,
      });
      this.eventStoreService.appendToStream(streamName, esEvent);
      this.globalEventBus.emit(PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageDateTimeElementValueSettedHandler };
