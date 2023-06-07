import { ReplaceTemplateDto } from '@be-templates/dtos';
import { IEvent } from '@nestjs/cqrs';

const TEMPLATE_REPLACED_EVENT_GLOBAL = 'TEMPLATE_REPLACED_EVENT_GLOBAL';

class TemplateReplacedEvent implements IEvent {
  constructor(public readonly payload: ReplaceTemplateDto) {}
}

export { TemplateReplacedEvent, TEMPLATE_REPLACED_EVENT_GLOBAL };
