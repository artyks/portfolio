import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindManyAssetsQuery } from '../implementations/find-many-assets.query';
import { AssetsPrismaWriteModelClient } from '@prisma-clients/assets-write-model';
import { AssetsSpecificSortingBy } from '@be-assets-manager/constants';
import { CommonSortingOrderEnum } from '@common/constants';
import { hasNextPage } from '@common/utility';
import { FindManyAssetsQueryResult } from '@be-assets-manager/types';

@QueryHandler(FindManyAssetsQuery)
class FindManyAssetsHandler implements IQueryHandler<FindManyAssetsQuery> {
  constructor(private readonly assetsPrismaClient: AssetsPrismaWriteModelClient) {}

  async execute({ payload }: FindManyAssetsQuery): Promise<FindManyAssetsQueryResult> {
    const { pagination, sorting, ...filter } = payload;

    const [totalCount, assets] = await this.assetsPrismaClient.$transaction([
      this.assetsPrismaClient.asset.count({
        where: filter,
      }),
      this.assetsPrismaClient.asset.findMany({
        skip: pagination?.skip,
        take: pagination?.limit,
        where: filter,
        orderBy: { [sorting?.by || AssetsSpecificSortingBy.FILE_NAME]: sorting?.order || CommonSortingOrderEnum.ASC },
      }),
    ]);

    return {
      assets,
      totalCount,
      pagination: pagination ? { ...pagination, hasNextPage: hasNextPage(pagination, totalCount) } : undefined,
    };
  }
}

export { FindManyAssetsHandler };
