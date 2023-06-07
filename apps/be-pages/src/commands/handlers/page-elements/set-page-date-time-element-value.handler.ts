import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { PageElementModel } from '../../../models/page-element.model';
import { SetPageDateTimeElementValueCommand } from '../../implementations/page-elements/set-page-date-time-element-value.command';
import { PageDateTimeElementValueSettedEvent } from '../../../events/implementations/page-elements/page-date-time-element-value-setted.event';

@CommandHandler(SetPageDateTimeElementValueCommand)
class SetPageDateTimeElementValueHandler implements ICommandHandler<SetPageDateTimeElementValueCommand> {
  pageElementRepository: TemplatesPagesPrismaWriteModelClient['pageElement'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly localEventBus: EventBus) {
    this.pageElementRepository = pagesPrismaClient.pageElement;
  }

  async execute({ payload }: SetPageDateTimeElementValueCommand) {
    const pageElementCurrent = await this.pageElementRepository.findUniqueOrThrow({ where: { id: payload.elementId } });
    const pageElementModel = new PageElementModel(pageElementCurrent);
    pageElementModel.setElementValue(payload.value);
    const { pageId } = await this.pageElementRepository.update(pageElementModel.getElementUpdate());
    this.localEventBus.publish(new PageDateTimeElementValueSettedEvent({ ...payload, pageId }));
  }
}

export { SetPageDateTimeElementValueHandler };
