import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { EventStoreService, getStreamName } from '@be-event-store';
import { jsonEvent } from '@eventstore/db-client';
import {
  PAGE_DOMAIN_NAME,
  PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_TYPE,
} from '@be-pages/constants';
import { logError } from '@common/utility';
import { PageMultipleChoiceElementValueSettedEvent } from '../../implementations/page-elements/page-multiple-choice-element-value-setted.event';
import { EsPageMultipleChoiceElementValueSettedEvent } from '@be-pages/types';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';

@EventsHandler(PageMultipleChoiceElementValueSettedEvent)
class PageMultipleChoiceElementValueSettedHandler implements IEventHandler<PageMultipleChoiceElementValueSettedEvent> {
  constructor(
    private readonly eventStoreService: EventStoreService,
    @Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy,
  ) {}

  async handle({ payload }: PageMultipleChoiceElementValueSettedEvent) {
    try {
      const streamName = getStreamName(PAGE_DOMAIN_NAME, payload.pageId);
      const esEvent = jsonEvent<EsPageMultipleChoiceElementValueSettedEvent>({
        type: PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_TYPE,
        data: payload,
      });
      this.eventStoreService.appendToStream(streamName, esEvent);
      this.globalEventBus.emit(PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { PageMultipleChoiceElementValueSettedHandler };
