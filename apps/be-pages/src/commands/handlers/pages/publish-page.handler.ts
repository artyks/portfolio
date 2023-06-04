import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PageModel as Page } from '../../../models/page.model';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { PublishPageCommand } from '../../implementations/pages/publish-page.command';

@CommandHandler(PublishPageCommand)
class PublishPageHandler implements ICommandHandler<PublishPageCommand> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly publisher: EventPublisher) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload: { id } }: PublishPageCommand) {
    const pageCurrent = await this.pageRepository.findUniqueOrThrow({ where: { id } });
    const PageModel = this.publisher.mergeClassContext(Page);
    const pageModel = new PageModel(pageCurrent);
    pageModel.publishPage();
    await this.pageRepository.update(pageModel.getPageUpdate());
    pageModel.commit();
  }
}

export { PublishPageHandler };
