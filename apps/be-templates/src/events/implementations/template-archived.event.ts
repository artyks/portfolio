import { ArchiveTemplateDto } from '@be-templates/dtos';
import { IEvent } from '@nestjs/cqrs';

class TemplateArchivedEvent implements IEvent {
  constructor(public readonly payload: ArchiveTemplateDto) {}
}

export { TemplateArchivedEvent };
