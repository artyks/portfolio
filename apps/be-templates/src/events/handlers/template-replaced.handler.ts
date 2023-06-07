import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { logError } from '@common/utility';
import { Inject } from '@nestjs/common';
import { GLOBAL_EVENT_BUS_CLIENT_NAME } from '@be-global-event-bus';
import { ClientProxy } from '@nestjs/microservices';
import { TEMPLATE_REPLACED_EVENT_GLOBAL, TemplateReplacedEvent } from '../implementations/template-replaced.event';

@EventsHandler(TemplateReplacedEvent)
class TemplateReplacedHandler implements IEventHandler<TemplateReplacedEvent> {
  constructor(@Inject(GLOBAL_EVENT_BUS_CLIENT_NAME) private readonly globalEventBus: ClientProxy) {}

  async handle({ payload }: TemplateReplacedEvent) {
    try {
      this.globalEventBus.emit(TEMPLATE_REPLACED_EVENT_GLOBAL, payload);
    } catch (error) {
      logError(error);
    }
  }
}

export { TemplateReplacedHandler };
