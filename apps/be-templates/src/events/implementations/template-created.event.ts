import { CreateTemplateDto } from '@be-templates/dtos';
import { IEvent } from '@nestjs/cqrs';

class TemplateCreatedEvent implements IEvent {
  constructor(public readonly payload: CreateTemplateDto) {}
}

export { TemplateCreatedEvent };
