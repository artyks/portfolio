import { CommonPaginationDto } from '@common/dtos';
import { Asset } from '@prisma-clients/assets-write-model';

type FindManyAssetsQueryResult = {
  assets: Asset[];
  pagination?: CommonPaginationDto & { hasNextPage: boolean };
  totalCount: number;
};

export type { FindManyAssetsQueryResult };
