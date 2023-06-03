import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ENDPOINT_PAGE_DRAFTS_SLUG } from '../../constants/pages.constants';
import { FIND_ONE_PAGE_DRAFT_SLUG } from '../../constants/page-drafts.constants';
import { FindManyPageDraftsDto, FindOnePageDraftDto } from '@be-pages/dtos';
import { PAGES_CLIENT_NAME } from '@be-pages/utility';
import { ClientProxy } from '@nestjs/microservices';
import { FIND_MANY_PAGE_DRAFTS_MESSAGE, FIND_ONE_PAGE_DRAFT_MESSAGE } from '@be-pages/constants';
import { firstValueFrom } from 'rxjs';

@Controller(ENDPOINT_PAGE_DRAFTS_SLUG)
class PagesDraftsQueryController {
  constructor(@Inject(PAGES_CLIENT_NAME) private readonly pagesClient: ClientProxy) {}

  @Get(FIND_ONE_PAGE_DRAFT_SLUG)
  async findOneDraft(@Param() payload: FindOnePageDraftDto) {
    return await firstValueFrom(this.pagesClient.send(FIND_ONE_PAGE_DRAFT_MESSAGE, payload));
  }

  @Get()
  async findManyDrafts(@Query() payload: FindManyPageDraftsDto) {
    return await firstValueFrom(this.pagesClient.send(FIND_MANY_PAGE_DRAFTS_MESSAGE, payload));
  }
}

export { PagesDraftsQueryController };
