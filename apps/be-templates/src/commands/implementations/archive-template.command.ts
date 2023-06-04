import { ArchiveTemplateDto } from '@be-templates/dtos';
import { ICommand } from '@nestjs/cqrs';

class ArchiveTemplateCommand implements ICommand {
  constructor(public readonly payload: ArchiveTemplateDto) {}
}

export { ArchiveTemplateCommand };
