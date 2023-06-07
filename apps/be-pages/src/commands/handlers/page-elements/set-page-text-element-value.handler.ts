import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { PageElementModel } from '../../../models/page-element.model';
import { SetPageTextElementValueCommand } from '../../implementations/page-elements/set-page-text-element-value.command';
import { PageTextElementValueSettedEvent } from '../../../events/implementations/page-elements/page-text-element-value-setted.event';

@CommandHandler(SetPageTextElementValueCommand)
class SetPageTextElementValueHandler implements ICommandHandler<SetPageTextElementValueCommand> {
  pageElementRepository: TemplatesPagesPrismaWriteModelClient['pageElement'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly localEventBus: EventBus) {
    this.pageElementRepository = pagesPrismaClient.pageElement;
  }

  async execute({ payload }: SetPageTextElementValueCommand) {
    const pageElementCurrent = await this.pageElementRepository.findUniqueOrThrow({ where: { id: payload.elementId } });
    const pageElementModel = new PageElementModel(pageElementCurrent);
    pageElementModel.setElementValue(payload.value);
    const { pageId } = await this.pageElementRepository.update(pageElementModel.getElementUpdate());
    this.localEventBus.publish(new PageTextElementValueSettedEvent({ ...payload, pageId }));
  }
}

export { SetPageTextElementValueHandler };
