import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';

import { CommonPaginationDto } from '@common/dtos';
import { CommonSortingOrderEnum } from '@common/constants';
import { FindManyAssetsSortingByEnum } from '@be-assets-manager/constants';

class FindManyAssetsSortingDto {
  @IsString()
  @IsEnum(FindManyAssetsSortingByEnum)
  by: (typeof FindManyAssetsSortingByEnum)[keyof FindManyAssetsSortingByEnum];

  @IsString()
  @IsEnum(CommonSortingOrderEnum)
  order: CommonSortingOrderEnum;
}

class FindManyAssetsDto {
  @IsOptional()
  @ValidateNested()
  pagination?: CommonPaginationDto;

  @IsOptional()
  @ValidateNested()
  sorting?: FindManyAssetsSortingDto;
}

export { FindManyAssetsDto, FindManyAssetsSortingDto };
