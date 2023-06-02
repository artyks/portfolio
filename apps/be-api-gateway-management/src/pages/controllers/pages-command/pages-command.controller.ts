import { Body, Controller, Post } from '@nestjs/common';
import {
  ENDPOINT_PAGES_SLUG,
  CREATE_PAGE_DRAFT_SLUG,
  ARCHIVE_PAGE_SLUG,
  PUBLISH_PAGE_SLUG,
  UNPUBLISH_PAGE_SLUG,
} from '../../constants/pages.constants';
import { ArchivePageDto, CreatePageDraftDto, PublishPageDto, UnpublishPageDto } from '@be-pages/dtos';

@Controller(ENDPOINT_PAGES_SLUG)
class PagesCommandController {
  @Post(CREATE_PAGE_DRAFT_SLUG)
  createDraft(@Body() payload: CreatePageDraftDto) {
    return;
  }

  @Post(ARCHIVE_PAGE_SLUG)
  archive(@Body() payload: ArchivePageDto) {
    return;
  }

  @Post(PUBLISH_PAGE_SLUG)
  publish(@Body() payload: PublishPageDto) {
    return;
  }

  @Post(UNPUBLISH_PAGE_SLUG)
  unpublish(@Body() payload: UnpublishPageDto) {
    return;
  }
}

export { PagesCommandController };
