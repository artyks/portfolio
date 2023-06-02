import { Controller, Get, Param, Query } from '@nestjs/common';
import { ENDPOINT_PAGE_DRAFTS_SLUG } from '../../constants/pages.constants';
import { FIND_ONE_PAGE_DRAFT_SLUG } from '../../constants/page-drafts.constants';
import { FindManyPageDraftsDto, FindOnePageDraftDto } from '@be-pages/dtos';

@Controller(ENDPOINT_PAGE_DRAFTS_SLUG)
class PagesDraftsQueryController {
  @Get(FIND_ONE_PAGE_DRAFT_SLUG)
  findOneDraft(@Param() params: FindManyPageDraftsDto) {
    return;
  }

  @Get()
  findManyDrafts(@Query() query: FindOnePageDraftDto) {
    return;
  }
}

export { PagesDraftsQueryController };
