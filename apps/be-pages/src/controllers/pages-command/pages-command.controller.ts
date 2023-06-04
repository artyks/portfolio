import { Controller } from '@nestjs/common';
import {
  CREATE_PAGE_DRAFT_EVENT,
  ARCHIVE_PAGE_EVENT,
  PUBLISH_PAGE_EVENT,
  UNPUBLISH_PAGE_EVENT,
} from '@be-pages/constants';
import { ArchivePageDto, CreatePageDraftDto, PublishPageDto, UnpublishPageDto } from '@be-pages/dtos';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePageDraftCommand } from '../../commands/implementations/pages/create-page-draft.command';
import { ArchivePageCommand } from '../../commands/implementations/pages/archive-page.command';
import { PublishPageCommand } from '../../commands/implementations/pages/publish-page.command';
import { UnpublishPageCommand } from '../../commands/implementations/pages/unpublish-page.command';

@Controller()
class PagesCommandController {
  constructor(private readonly commandBus: CommandBus) {}

  @EventPattern(CREATE_PAGE_DRAFT_EVENT)
  async handleCreateDraft(@Payload() payload: CreatePageDraftDto) {
    return this.commandBus.execute(new CreatePageDraftCommand(payload));
  }

  @EventPattern(ARCHIVE_PAGE_EVENT)
  async handleArchive(@Payload() payload: ArchivePageDto) {
    return this.commandBus.execute(new ArchivePageCommand(payload));
  }

  @EventPattern(PUBLISH_PAGE_EVENT)
  async handlePublish(@Payload() payload: PublishPageDto) {
    return this.commandBus.execute(new PublishPageCommand(payload));
  }

  @EventPattern(UNPUBLISH_PAGE_EVENT)
  async handleUnpublish(@Payload() payload: UnpublishPageDto) {
    return this.commandBus.execute(new UnpublishPageCommand(payload));
  }
}

export { PagesCommandController };
