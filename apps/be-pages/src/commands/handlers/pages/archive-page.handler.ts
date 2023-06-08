import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { ArchivePageCommand } from '../../implementations/pages/archive-page.command';
import { PageModel } from '../../../models/page.model';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { PageArchivedEvent } from '../../../events/implementations/pages/page-archived.event';

@CommandHandler(ArchivePageCommand)
class ArchivePageHandler implements ICommandHandler<ArchivePageCommand> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly localEventBus: EventBus) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload }: ArchivePageCommand) {
    const pageCurrent = await this.pageRepository.findUniqueOrThrow({ where: { id: payload.id } });
    const pageModel = new PageModel(pageCurrent);
    pageModel.archivePage();
    await this.pageRepository.update(pageModel.getPageUpdate());
    this.localEventBus.publish(new PageArchivedEvent({ ...payload }));
  }
}

export { ArchivePageHandler };
