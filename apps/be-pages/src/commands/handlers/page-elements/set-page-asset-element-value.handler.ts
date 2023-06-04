import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { SetPageAssetElementValueCommand } from '../../implementations/page-elements/set-page-asset-element-value.command';
import { PageElementModel } from '../../../models/page-element.model';

@CommandHandler(SetPageAssetElementValueCommand)
class SetPageAssetElementValueHandler implements ICommandHandler<SetPageAssetElementValueCommand> {
  pageElementRepository: TemplatesPagesPrismaWriteModelClient['pageElement'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient) {
    this.pageElementRepository = pagesPrismaClient.pageElement;
  }

  async execute({ payload }: SetPageAssetElementValueCommand) {
    const pageElementCurrent = await this.pageElementRepository.findUniqueOrThrow({ where: { id: payload.elementId } });
    const pageElementModel = new PageElementModel(pageElementCurrent);
    pageElementModel.setElementValue(payload.value);
    await this.pageElementRepository.update(pageElementModel.getElementUpdate());
  }
}

export { SetPageAssetElementValueHandler };
