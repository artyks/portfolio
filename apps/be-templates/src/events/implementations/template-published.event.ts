import { PublishTemplateDto } from '@be-templates/dtos';
import { IEvent } from '@nestjs/cqrs';

const TEMPLATE_PUBLISHED_EVENT_GLOBAL = 'TEMPLATE_PUBLISHED_EVENT_GLOBAL';

class TemplatePublishedEvent implements IEvent {
  constructor(public readonly payload: PublishTemplateDto) {}
}

export { TemplatePublishedEvent, TEMPLATE_PUBLISHED_EVENT_GLOBAL };
