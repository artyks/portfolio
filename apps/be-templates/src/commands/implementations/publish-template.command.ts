import { PublishTemplateDto } from '@be-templates/dtos';
import { ICommand } from '@nestjs/cqrs';

class PublishTemplateCommand implements ICommand {
  constructor(public readonly payload: PublishTemplateDto) {}
}

export { PublishTemplateCommand };
