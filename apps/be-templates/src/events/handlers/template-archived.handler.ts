import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { logError } from '@common/utility';
import { TEMPLATE_ARCHIVED_EVENT_GLOBAL, TemplateArchivedEvent } from '../implementations/template-archived.event';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';

@EventsHandler(TemplateArchivedEvent)
class TemplateArchivedHandler implements IEventHandler<TemplateArchivedEvent> {
  constructor(@Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy) {}

  async handle({ payload }: TemplateArchivedEvent) {
    try {
      this.globalEventBus.emit(TEMPLATE_ARCHIVED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { TemplateArchivedHandler };
