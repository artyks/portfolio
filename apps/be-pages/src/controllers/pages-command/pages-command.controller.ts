import { Controller } from '@nestjs/common';
import {
  CREATE_PAGE_DRAFT_EVENT,
  ARCHIVE_PAGE_EVENT,
  PUBLISH_PAGE_EVENT,
  UNPUBLISH_PAGE_EVENT,
} from '@be-pages/constants';
import { ArchivePageDto, CreatePageDraftDto, PublishPageDto, UnpublishPageDto } from '@be-pages/dtos';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
class PagesCommandController {
  @EventPattern(CREATE_PAGE_DRAFT_EVENT)
  handleCreateDraft(@Payload() payload: CreatePageDraftDto) {
    return;
  }

  @EventPattern(ARCHIVE_PAGE_EVENT)
  handleArchive(@Payload() payload: ArchivePageDto) {
    return;
  }

  @EventPattern(PUBLISH_PAGE_EVENT)
  handlePublish(@Payload() payload: PublishPageDto) {
    return;
  }

  @EventPattern(UNPUBLISH_PAGE_EVENT)
  handleUnpublish(@Payload() payload: UnpublishPageDto) {
    return;
  }
}

export { PagesCommandController };
