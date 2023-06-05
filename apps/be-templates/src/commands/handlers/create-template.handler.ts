import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { TemplateModel as Template } from '../../models/template.model';
import { TemplatesService } from '../../services/templates.service';
import { CreateTemplateCommand } from '../implementations/create-template.command';

@CommandHandler(CreateTemplateCommand)
class CreateTemplateHandler implements ICommandHandler<CreateTemplateCommand> {
  constructor(private readonly templatesService: TemplatesService, private readonly publisher: EventPublisher) {}

  async execute({ payload }: CreateTemplateCommand) {
    const TemplateModel = this.publisher.mergeClassContext(Template);
    const templateModel = new TemplateModel(payload);
    await this.templatesService.create(templateModel.getTemplateCreateInput());
    templateModel.commit();
  }
}

export { CreateTemplateHandler };
