import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  ENDPOINT_PAGES_SLUG,
  CREATE_PAGE_DRAFT_SLUG,
  ARCHIVE_PAGE_SLUG,
  PUBLISH_PAGE_SLUG,
  UNPUBLISH_PAGE_SLUG,
} from '../../constants/pages.constants';
import {
  ArchivePageDto,
  ArchivePageGatewayDto,
  CreatePageDto,
  CreatePageGatewayDto,
  PublishPageDto,
  PublishPageGatewayDto,
  UnpublishPageDto,
  UnpublishPageGatewayDto,
} from '@be-pages/dtos';
import { PAGES_CLIENT_NAME } from '@be-pages/utility';
import { ClientProxy } from '@nestjs/microservices';
import {
  ARCHIVE_PAGE_EVENT,
  CREATE_PAGE_DRAFT_EVENT,
  PUBLISH_PAGE_EVENT,
  UNPUBLISH_PAGE_EVENT,
} from '@be-pages/constants';
import { UserWithoutPassword } from '@be-authentication/types';
import { User } from '@be-authentication/decorators';

@Controller(ENDPOINT_PAGES_SLUG)
class PagesCommandController {
  constructor(@Inject(PAGES_CLIENT_NAME) private readonly pagesClient: ClientProxy) {}

  @Post(CREATE_PAGE_DRAFT_SLUG)
  createDraft(@Body() payload: CreatePageGatewayDto, @User() { id }: UserWithoutPassword) {
    this.pagesClient.emit<unknown, CreatePageDto>(CREATE_PAGE_DRAFT_EVENT, { ...payload, userId: id });
  }

  @Post(ARCHIVE_PAGE_SLUG)
  archive(@Body() payload: ArchivePageGatewayDto, @User() { id }: UserWithoutPassword) {
    this.pagesClient.emit<unknown, ArchivePageDto>(ARCHIVE_PAGE_EVENT, { ...payload, userId: id });
  }

  @Post(PUBLISH_PAGE_SLUG)
  publish(@Body() payload: PublishPageGatewayDto, @User() { id }: UserWithoutPassword) {
    this.pagesClient.emit<unknown, PublishPageDto>(PUBLISH_PAGE_EVENT, { ...payload, userId: id });
  }

  @Post(UNPUBLISH_PAGE_SLUG)
  unpublish(@Body() payload: UnpublishPageGatewayDto, @User() { id }: UserWithoutPassword) {
    this.pagesClient.emit<unknown, UnpublishPageDto>(UNPUBLISH_PAGE_EVENT, { ...payload, userId: id });
  }
}

export { PagesCommandController };
