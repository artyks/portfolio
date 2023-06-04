import { IsOptional, ValidateNested } from 'class-validator';
import { CreatePageAssetElementValueDto } from './create-page-asset-element.dto';
import { BaseSetPageElementValueDto } from './base-set-page-element-value.dto';

class SetPageAssetElementValueValueDto extends CreatePageAssetElementValueDto {}

class SetPageAssetElementValueDto extends BaseSetPageElementValueDto {
  @IsOptional()
  @ValidateNested()
  value?: SetPageAssetElementValueValueDto | null;
}

export { SetPageAssetElementValueDto };
