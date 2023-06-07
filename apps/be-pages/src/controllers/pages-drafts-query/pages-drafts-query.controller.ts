import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { FIND_ONE_PAGE_DRAFT_MESSAGE, FIND_MANY_PAGE_DRAFTS_MESSAGE } from '@be-pages/constants';
import { FindManyPageDraftsDto, FindOnePageDraftDto } from '@be-pages/dtos';
import { QueryBus } from '@nestjs/cqrs';
import { FindOnePageDraftQuery } from '../../queries/implementations/find-one-page-draft.query';
import { FindManyPageDraftsQuery } from '../../queries/implementations/find-many-page-drafts.query';

@Controller()
class PagesDraftsQueryController {
  constructor(private readonly queryBus: QueryBus) {}

  @MessagePattern(FIND_ONE_PAGE_DRAFT_MESSAGE)
  async findOneDraft(@Payload() payload: FindOnePageDraftDto) {
    return await this.queryBus.execute(new FindOnePageDraftQuery(payload));
  }

  @MessagePattern(FIND_MANY_PAGE_DRAFTS_MESSAGE)
  async findManyDrafts(@Payload() payload: FindManyPageDraftsDto) {
    return await this.queryBus.execute(new FindManyPageDraftsQuery(payload));
  }
}

export { PagesDraftsQueryController };
