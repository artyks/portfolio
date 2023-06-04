import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PageModel as Page } from '../../../models/page.model';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { CreatePageDraftCommand } from '../../implementations/pages/create-page-draft.command';

@CommandHandler(CreatePageDraftCommand)
class CreatePageDraftHandler implements ICommandHandler<CreatePageDraftCommand> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly publisher: EventPublisher) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload }: CreatePageDraftCommand) {
    const PageModel = this.publisher.mergeClassContext(Page);
    const pageModel = new PageModel(payload);
    await this.pageRepository.update(pageModel.getPageUpdate());
    pageModel.commit();
  }
}

export { CreatePageDraftHandler };
