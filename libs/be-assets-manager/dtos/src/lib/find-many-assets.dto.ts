import { IsEnum, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';

import { CommonPaginationDto } from '@common/dtos';
import { CommonSortingOrderEnum } from '@common/constants';
import { FindManyAssetsSortingByEnum } from '@be-assets-manager/constants';

class FindManyAssetsSortingDto {
  @IsString()
  @IsEnum(FindManyAssetsSortingByEnum)
  by: FindManyAssetsSortingByEnum;

  @IsString()
  @IsEnum(CommonSortingOrderEnum)
  order: CommonSortingOrderEnum;
}

class FindManyAssetsDto {
  /**
   * Consider null as a root directory or parent folder absence
   */
  @IsOptional()
  @IsUUID()
  folderId?: string | null;

  @IsOptional()
  @ValidateNested()
  pagination?: CommonPaginationDto;

  @IsOptional()
  @ValidateNested()
  sorting?: FindManyAssetsSortingDto;
}

export { FindManyAssetsDto, FindManyAssetsSortingDto };
