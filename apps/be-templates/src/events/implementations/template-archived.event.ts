import { ArchiveTemplateDto } from '@be-templates/dtos';
import { IEvent } from '@nestjs/cqrs';

const TEMPLATE_ARCHIVED_EVENT_GLOBAL = 'TEMPLATE_ARCHIVED_EVENT_GLOBAL';

class TemplateArchivedEvent implements IEvent {
  constructor(public readonly payload: ArchiveTemplateDto) {}
}

export { TemplateArchivedEvent, TEMPLATE_ARCHIVED_EVENT_GLOBAL };
