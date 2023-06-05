import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { TemplateModel as Template } from '../../models/template.model';
import { PublishTemplateCommand } from '../implementations/publish-template.command';

@CommandHandler(PublishTemplateCommand)
class PublishTemplateHandler implements ICommandHandler<PublishTemplateCommand> {
  templateRepository: TemplatesPagesPrismaWriteModelClient['template'];

  constructor(templatesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly publisher: EventPublisher) {
    this.templateRepository = templatesPrismaClient.template;
  }

  async execute({ payload: { id } }: PublishTemplateCommand) {
    const templateCurrent = await this.templateRepository.findUniqueOrThrow({ where: { id } });
    const TemplateModel = this.publisher.mergeClassContext(Template);
    const templateModel = new TemplateModel(templateCurrent);
    templateModel.publishTemplate();
    await this.templateRepository.update(templateModel.getTemplateUpdateWithoutElements());
    templateModel.commit();
  }
}

export { PublishTemplateHandler };
