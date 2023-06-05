import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { TemplateModel as Template } from '../../models/template.model';
import { ReplaceTemplateCommand } from '../implementations/replace-template.command';
import { TemplatesService } from '../../services/templates.service';

@CommandHandler(ReplaceTemplateCommand)
class ReplaceTemplateHandler implements ICommandHandler<ReplaceTemplateCommand> {
  constructor(private readonly templatesService: TemplatesService, private readonly publisher: EventPublisher) {}

  async execute({ payload }: ReplaceTemplateCommand) {
    const TemplateModel = this.publisher.mergeClassContext(Template);
    const templateModel = new TemplateModel(payload);
    await this.templatesService.replace(templateModel.getTemplateReplaceInput());
    templateModel.commit();
  }
}

export { ReplaceTemplateHandler };
