import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { ArchiveTemplateCommand } from '../implementations/archive-template.command';
import { TemplateModel as Template } from '../../models/template.model';

@CommandHandler(ArchiveTemplateCommand)
class ArchiveTemplateHandler implements ICommandHandler<ArchiveTemplateCommand> {
  templateRepository: TemplatesPagesPrismaWriteModelClient['template'];

  constructor(templatesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly publisher: EventPublisher) {
    this.templateRepository = templatesPrismaClient.template;
  }

  async execute({ payload: { id } }: ArchiveTemplateCommand) {
    const templateCurrent = await this.templateRepository.findUniqueOrThrow({ where: { id } });
    const TemplateModel = this.publisher.mergeClassContext(Template);
    const templateModel = new TemplateModel(templateCurrent);
    templateModel.archiveTemplate();
    await this.templateRepository.update(templateModel.getTemplateUpdateWithoutElements());
    templateModel.commit();
  }
}

export { ArchiveTemplateHandler };
