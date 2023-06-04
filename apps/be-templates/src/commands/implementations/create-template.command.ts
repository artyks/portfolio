import { CreateTemplateDto } from '@be-templates/dtos';
import { ICommand } from '@nestjs/cqrs';

class CreateTemplateCommand implements ICommand {
  constructor(public readonly payload: CreateTemplateDto) {}
}

export { CreateTemplateCommand };
