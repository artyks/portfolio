import { ReplaceTemplateDto } from '@be-templates/dtos';
import { IEvent } from '@nestjs/cqrs';

class TemplateReplacedEvent implements IEvent {
  constructor(public readonly payload: ReplaceTemplateDto) {}
}

export { TemplateReplacedEvent };
