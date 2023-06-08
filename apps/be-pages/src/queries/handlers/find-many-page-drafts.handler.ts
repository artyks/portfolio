import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { FindManyPageDraftsQuery } from '../implementations/find-many-page-drafts.query';
import { FindManyPageDraftsQueryResult } from '@be-pages/types';
import { FindManyPageDraftsSortingByEnum } from '@be-pages/constants';
import { CommonSortingOrderEnum } from '@common/constants';
import { hasNextPage } from '@common/utility';

@QueryHandler(FindManyPageDraftsQuery)
class FindManyPageDraftsHandler implements IQueryHandler<FindManyPageDraftsQuery> {
  constructor(private readonly pagesPrismaClient: TemplatesPagesPrismaWriteModelClient) {}

  async execute({ payload }: FindManyPageDraftsQuery): Promise<FindManyPageDraftsQueryResult> {
    const { pagination, sorting, ...filter } = payload;

    const [totalCount, pages] = await this.pagesPrismaClient.$transaction([
      this.pagesPrismaClient.page.count({
        where: filter,
      }),
      this.pagesPrismaClient.page.findMany({
        skip: pagination?.skip,
        take: pagination?.limit,
        where: filter,
        orderBy: {
          [sorting?.by || FindManyPageDraftsSortingByEnum.CREATION_DATE]: sorting?.order || CommonSortingOrderEnum.ASC,
        },
      }),
    ]);

    return {
      pages,
      totalCount,
      pagination: pagination ? { ...pagination, hasNextPage: hasNextPage(pagination, totalCount) } : undefined,
    };
  }
}

export { FindManyPageDraftsHandler };
