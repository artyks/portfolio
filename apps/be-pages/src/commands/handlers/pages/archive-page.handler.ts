import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ArchivePageCommand } from '../../implementations/pages/archive-page.command';
import { PageModel as Page } from '../../../models/page.model';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';

@CommandHandler(ArchivePageCommand)
class ArchivePageHandler implements ICommandHandler<ArchivePageCommand> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly publisher: EventPublisher) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload: { id } }: ArchivePageCommand) {
    const pageCurrent = await this.pageRepository.findUniqueOrThrow({ where: { id } });
    const PageModel = this.publisher.mergeClassContext(Page);
    const pageModel = new PageModel(pageCurrent);
    pageModel.archivePage();
    await this.pageRepository.update(pageModel.getPageUpdate());
    pageModel.commit();
  }
}

export { ArchivePageHandler };
