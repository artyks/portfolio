import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { PageModel } from '../../../models/page.model';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { CreatePageDraftCommand } from '../../implementations/pages/create-page-draft.command';
import { PageDraftCreatedEvent } from '../../../events/implementations/pages/page-draft-created.event';

@CommandHandler(CreatePageDraftCommand)
class CreatePageDraftHandler implements ICommandHandler<CreatePageDraftCommand> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient, private readonly localEventBus: EventBus) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload }: CreatePageDraftCommand) {
    const pageModel = new PageModel(payload);
    const { id } = await this.pageRepository.update(pageModel.getPageUpdate());
    this.localEventBus.publish(new PageDraftCreatedEvent({ ...payload, id }));
  }
}

export { CreatePageDraftHandler };
