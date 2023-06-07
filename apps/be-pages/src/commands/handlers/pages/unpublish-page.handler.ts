import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { PageModel } from '../../../models/page.model';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { UnpublishPageCommand } from '../../implementations/pages/unpublish-page.command';
import { PageUnpublishedEvent } from '../../../events/implementations/pages/page-unpublished.event';

@CommandHandler(UnpublishPageCommand)
class UnpublishPageHandler implements ICommandHandler<UnpublishPageCommand> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly localEventBus: EventBus) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload: { id } }: UnpublishPageCommand) {
    const pageCurrent = await this.pageRepository.findUniqueOrThrow({ where: { id } });
    const pageModel = new PageModel(pageCurrent);
    pageModel.unpublishPage();
    await this.pageRepository.update(pageModel.getPageUpdate());
    this.localEventBus.publish(new PageUnpublishedEvent({ id }));
  }
}

export { UnpublishPageHandler };
