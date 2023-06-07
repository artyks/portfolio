import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { FindManyPageDraftsQuery } from '../implementations/find-many-page-drafts.query';
import { FindManyPageDraftsQueryResult } from '@be-pages/types';

@QueryHandler(FindManyPageDraftsQuery)
class FindManyPageDraftsHandler implements IQueryHandler<FindManyPageDraftsQuery> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload }: FindManyPageDraftsQuery): Promise<FindManyPageDraftsQueryResult> {
    return await this.pageRepository.findMany({ where: payload });
  }
}

export { FindManyPageDraftsHandler };
