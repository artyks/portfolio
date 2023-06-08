import { FindManyTemplatesSortingByEnum } from '@be-templates/constants';
import { CommonSortingOrderEnum } from '@common/constants';
import { CommonPaginationDto } from '@common/dtos';
import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';

class FindManyTemplatesSortingDto {
  @IsString()
  @IsEnum(FindManyTemplatesSortingByEnum)
  by: (typeof FindManyTemplatesSortingByEnum)[keyof FindManyTemplatesSortingByEnum];

  @IsString()
  @IsEnum(CommonSortingOrderEnum)
  order: CommonSortingOrderEnum;
}

class FindManyTemplatesDto {
  @IsOptional()
  @ValidateNested()
  pagination?: CommonPaginationDto;

  @IsOptional()
  @ValidateNested()
  sorting?: FindManyTemplatesSortingDto;
}

export { FindManyTemplatesDto };
