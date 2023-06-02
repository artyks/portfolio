import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { FIND_ONE_PAGE_DRAFT_MESSAGE, FIND_MANY_PAGE_DRAFTS_MESSAGE } from '@be-pages/constants';
import { FindManyPageDraftsDto, FindOnePageDraftDto } from '@be-pages/dtos';

@Controller()
class PagesDraftsQueryController {
  @MessagePattern(FIND_ONE_PAGE_DRAFT_MESSAGE)
  findOneDraft(@Payload() payload: FindOnePageDraftDto) {
    return;
  }

  @MessagePattern(FIND_MANY_PAGE_DRAFTS_MESSAGE)
  findManyDrafts(@Payload() payload: FindManyPageDraftsDto) {
    return;
  }
}

export { PagesDraftsQueryController };
