import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { PageElementModel } from '../../../models/page-element.model';
import { SetPageNumberElementValueCommand } from '../../implementations/page-elements/set-page-number-element-value.command';

@CommandHandler(SetPageNumberElementValueCommand)
class SetPageNumberElementValueHandler implements ICommandHandler<SetPageNumberElementValueCommand> {
  pageElementRepository: TemplatesPagesPrismaWriteModelClient['pageElement'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient) {
    this.pageElementRepository = pagesPrismaClient.pageElement;
  }

  async execute({ payload }: SetPageNumberElementValueCommand) {
    const pageElementCurrent = await this.pageElementRepository.findUniqueOrThrow({ where: { id: payload.elementId } });
    const pageElementModel = new PageElementModel(pageElementCurrent);
    pageElementModel.setElementValue(payload.value);
    await this.pageElementRepository.update(pageElementModel.getElementUpdate());
  }
}

export { SetPageNumberElementValueHandler };
