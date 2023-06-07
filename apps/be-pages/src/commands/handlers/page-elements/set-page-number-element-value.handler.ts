import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { PageElementModel } from '../../../models/page-element.model';
import { SetPageNumberElementValueCommand } from '../../implementations/page-elements/set-page-number-element-value.command';
import { PageNumberElementValueSettedEvent } from '../../../events/implementations/page-elements/page-number-element-value-setted.event';

@CommandHandler(SetPageNumberElementValueCommand)
class SetPageNumberElementValueHandler implements ICommandHandler<SetPageNumberElementValueCommand> {
  pageElementRepository: TemplatesPagesPrismaWriteModelClient['pageElement'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly localEventBus: EventBus) {
    this.pageElementRepository = pagesPrismaClient.pageElement;
  }

  async execute({ payload }: SetPageNumberElementValueCommand) {
    const pageElementCurrent = await this.pageElementRepository.findUniqueOrThrow({ where: { id: payload.elementId } });
    const pageElementModel = new PageElementModel(pageElementCurrent);
    pageElementModel.setElementValue(payload.value);
    const { pageId } = await this.pageElementRepository.update(pageElementModel.getElementUpdate());
    this.localEventBus.publish(new PageNumberElementValueSettedEvent({ ...payload, pageId }));
  }
}

export { SetPageNumberElementValueHandler };
