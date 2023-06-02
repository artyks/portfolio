import { Controller, Get, Param, Query } from '@nestjs/common';
import { ENDPOINT_PAGE_DRAFTS_SLUG } from '../../constants/pages.constants';
import { FindManyPageDraftsQuery, FindOnePageDraftParams } from '../../dtos/page-drafts.dto';
import { FIND_ONE_PAGE_DRAFT_SLUG } from '../../constants/page-drafts.constants';

@Controller(ENDPOINT_PAGE_DRAFTS_SLUG)
class PagesDraftsQueryController {
  @Get(FIND_ONE_PAGE_DRAFT_SLUG)
  findOneDraft(@Param() { id }: FindOnePageDraftParams) {
    return;
  }

  @Get()
  findManyDrafts(@Query() query: FindManyPageDraftsQuery) {
    return;
  }
}

export { PagesDraftsQueryController };
