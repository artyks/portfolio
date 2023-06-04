import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  ENDPOINT_PAGES_SLUG,
  CREATE_PAGE_DRAFT_SLUG,
  ARCHIVE_PAGE_SLUG,
  PUBLISH_PAGE_SLUG,
  UNPUBLISH_PAGE_SLUG,
} from '../../constants/pages.constants';
import { ArchivePageDto, CreatePageDto, PublishPageDto, UnpublishPageDto } from '@be-pages/dtos';
import { PAGES_CLIENT_NAME } from '@be-pages/utility';
import { ClientProxy } from '@nestjs/microservices';
import {
  ARCHIVE_PAGE_EVENT,
  CREATE_PAGE_DRAFT_EVENT,
  PUBLISH_PAGE_EVENT,
  UNPUBLISH_PAGE_EVENT,
} from '@be-pages/constants';

@Controller(ENDPOINT_PAGES_SLUG)
class PagesCommandController {
  constructor(@Inject(PAGES_CLIENT_NAME) private readonly pagesClient: ClientProxy) {}

  @Post(CREATE_PAGE_DRAFT_SLUG)
  createDraft(@Body() payload: CreatePageDto) {
    this.pagesClient.emit(CREATE_PAGE_DRAFT_EVENT, payload);
  }

  @Post(ARCHIVE_PAGE_SLUG)
  archive(@Body() payload: ArchivePageDto) {
    this.pagesClient.emit(ARCHIVE_PAGE_EVENT, payload);
  }

  @Post(PUBLISH_PAGE_SLUG)
  publish(@Body() payload: PublishPageDto) {
    this.pagesClient.emit(PUBLISH_PAGE_EVENT, payload);
  }

  @Post(UNPUBLISH_PAGE_SLUG)
  unpublish(@Body() payload: UnpublishPageDto) {
    this.pagesClient.emit(UNPUBLISH_PAGE_EVENT, payload);
  }
}

export { PagesCommandController };
