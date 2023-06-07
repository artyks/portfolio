import { CreateTemplateDto } from '@be-templates/dtos';
import { IEvent } from '@nestjs/cqrs';

const TEMPLATE_CREATED_EVENT_GLOBAL = 'TEMPLATE_CREATED_EVENT_GLOBAL';

class TemplateCreatedEvent implements IEvent {
  constructor(public readonly payload: CreateTemplateDto) {}
}

export { TemplateCreatedEvent, TEMPLATE_CREATED_EVENT_GLOBAL };
