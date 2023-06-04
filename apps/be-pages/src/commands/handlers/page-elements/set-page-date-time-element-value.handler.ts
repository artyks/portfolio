import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { PageElementModel } from '../../../models/page-element.model';
import { SetPageDateTimeElementValueCommand } from '../../implementations/page-elements/set-page-date-time-element-value.command';

@CommandHandler(SetPageDateTimeElementValueCommand)
class SetPageDateTimeElementValueHandler implements ICommandHandler<SetPageDateTimeElementValueCommand> {
  pageElementRepository: TemplatesPagesPrismaWriteModelClient['pageElement'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient) {
    this.pageElementRepository = pagesPrismaClient.pageElement;
  }

  async execute({ payload }: SetPageDateTimeElementValueCommand) {
    const pageElementCurrent = await this.pageElementRepository.findUniqueOrThrow({ where: { id: payload.elementId } });
    const pageElementModel = new PageElementModel(pageElementCurrent);
    pageElementModel.setElementValue(payload.value);
    await this.pageElementRepository.update(pageElementModel.getElementUpdate());
  }
}

export { SetPageDateTimeElementValueHandler };
