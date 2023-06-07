import { PublishTemplateDto } from '@be-templates/dtos';
import { IEvent } from '@nestjs/cqrs';

class TemplatePublishedEvent implements IEvent {
  constructor(public readonly payload: PublishTemplateDto) {}
}

export { TemplatePublishedEvent };
