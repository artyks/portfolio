import { CommonPaginationDto } from '@common/dtos';

const hasNextPage = (pagination: CommonPaginationDto, totalCount: number) => {
  return pagination.skip + pagination.limit < totalCount;
};

export { hasNextPage };
