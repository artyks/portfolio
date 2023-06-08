import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { PageModel } from '../../../models/page.model';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { PublishPageCommand } from '../../implementations/pages/publish-page.command';
import { PagePublishedEvent } from '../../../events/implementations/pages/page-published.event';

@CommandHandler(PublishPageCommand)
class PublishPageHandler implements ICommandHandler<PublishPageCommand> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly localEventBus: EventBus) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload }: PublishPageCommand) {
    const pageCurrent = await this.pageRepository.findUniqueOrThrow({ where: { id: payload.id } });
    const pageModel = new PageModel(pageCurrent);
    pageModel.publishPage();
    await this.pageRepository.update(pageModel.getPageUpdate());
    this.localEventBus.publish(new PagePublishedEvent({ ...payload }));
  }
}

export { PublishPageHandler };
