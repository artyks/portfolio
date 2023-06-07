import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { logError } from '@common/utility';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';
import { TemplateCreatedEvent } from '../implementations/template-created.event';
import { TEMPLATE_CREATED_EVENT_GLOBAL } from '@be-templates/constants';

@EventsHandler(TemplateCreatedEvent)
class TemplateCreatedHandler implements IEventHandler<TemplateCreatedEvent> {
  constructor(@Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy) {}

  async handle({ payload }: TemplateCreatedEvent) {
    try {
      this.globalEventBus.emit(TEMPLATE_CREATED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { TemplateCreatedHandler };
