import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { PageElementModel } from '../../../models/page-element.model';
import { SetPageMultipleChoiceElementValueCommand } from '../../implementations/page-elements/set-page-multiple-choice-element-value.command';

@CommandHandler(SetPageMultipleChoiceElementValueCommand)
class SetPageMultipleChoiceElementValueHandler implements ICommandHandler<SetPageMultipleChoiceElementValueCommand> {
  pageElementRepository: TemplatesPagesPrismaWriteModelClient['pageElement'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient) {
    this.pageElementRepository = pagesPrismaClient.pageElement;
  }

  async execute({ payload }: SetPageMultipleChoiceElementValueCommand) {
    const pageElementCurrent = await this.pageElementRepository.findUniqueOrThrow({ where: { id: payload.elementId } });
    const pageElementModel = new PageElementModel(pageElementCurrent);
    pageElementModel.setElementValue(payload.value);
    await this.pageElementRepository.update(pageElementModel.getElementUpdate());
  }
}

export { SetPageMultipleChoiceElementValueHandler };
