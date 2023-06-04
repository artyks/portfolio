import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PageModel as Page } from '../../../models/page.model';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { UnpublishPageCommand } from '../../implementations/pages/unpublish-page.command';

@CommandHandler(UnpublishPageCommand)
class UnpublishPageHandler implements ICommandHandler<UnpublishPageCommand> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly publisher: EventPublisher) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload: { id } }: UnpublishPageCommand) {
    const pageCurrent = await this.pageRepository.findUniqueOrThrow({ where: { id } });
    const PageModel = this.publisher.mergeClassContext(Page);
    const pageModel = new PageModel(pageCurrent);
    pageModel.unpublishPage();
    await this.pageRepository.update(pageModel.getPageUpdate());
    pageModel.commit();
  }
}

export { UnpublishPageHandler };
