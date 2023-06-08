import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { FindManyTemplatesQueryResult } from '@be-templates/types';
import { FindManyTemplatesQuery } from '../implementations/find-many-templates.query';
import { hasNextPage } from '@common/utility';
import { CommonSortingOrderEnum } from '@common/constants';
import { FindManyTemplatesSortingByEnum } from '@be-templates/constants';

@QueryHandler(FindManyTemplatesQuery)
class FindManyTemplatesHandler implements IQueryHandler<FindManyTemplatesQuery> {
  constructor(private readonly templatesPrismaClient: TemplatesPagesPrismaWriteModelClient) {}

  async execute({ payload }: FindManyTemplatesQuery): Promise<FindManyTemplatesQueryResult> {
    const { pagination, sorting, ...filter } = payload;

    const [totalCount, templates] = await this.templatesPrismaClient.$transaction([
      this.templatesPrismaClient.template.count({
        where: filter,
      }),
      this.templatesPrismaClient.template.findMany({
        include: { _count: { select: { pages: true } } },
        skip: pagination?.skip,
        take: pagination?.limit,
        where: filter,
        orderBy: {
          [sorting?.by || FindManyTemplatesSortingByEnum.CREATION_DATE]: sorting?.order || CommonSortingOrderEnum.ASC,
        },
      }),
    ]);

    return {
      templates,
      totalCount,
      pagination: pagination ? { ...pagination, hasNextPage: hasNextPage(pagination, totalCount) } : undefined,
    };
  }
}

export { FindManyTemplatesHandler };
