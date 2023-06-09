import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { logError } from '@common/utility';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';
import { TemplatePublishedEvent } from '../implementations/template-published.event';
import { TEMPLATE_PUBLISHED_EVENT_GLOBAL } from '@be-templates/constants';

@EventsHandler(TemplatePublishedEvent)
class TemplatePublishedHandler implements IEventHandler<TemplatePublishedEvent> {
  constructor(@Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy) {}

  async handle({ payload }: TemplatePublishedEvent) {
    try {
      this.globalEventBus.emit(TEMPLATE_PUBLISHED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { TemplatePublishedHandler };
