import { ReplaceTemplateDto } from '@be-templates/dtos';
import { ICommand } from '@nestjs/cqrs';

class ReplaceTemplateCommand implements ICommand {
  constructor(public readonly payload: ReplaceTemplateDto) {}
}

export { ReplaceTemplateCommand };
