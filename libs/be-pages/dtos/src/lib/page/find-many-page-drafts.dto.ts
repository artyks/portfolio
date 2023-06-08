import { FindManyPageDraftsSortingByEnum } from '@be-pages/constants';
import { CommonSortingOrderEnum } from '@common/constants';
import { CommonPaginationDto } from '@common/dtos';
import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';

class FindManyPageDraftsSortingDto {
  @IsString()
  @IsEnum(FindManyPageDraftsSortingByEnum)
  by: (typeof FindManyPageDraftsSortingByEnum)[keyof FindManyPageDraftsSortingByEnum];

  @IsString()
  @IsEnum(CommonSortingOrderEnum)
  order: CommonSortingOrderEnum;
}

class FindManyPageDraftsDto {
  @IsOptional()
  @ValidateNested()
  pagination?: CommonPaginationDto;

  @IsOptional()
  @ValidateNested()
  sorting?: FindManyPageDraftsSortingDto;
}

export { FindManyPageDraftsDto };
