import { IsOptional, IsUUID, ValidateNested } from 'class-validator';
import { BaseCreatePageElementDto } from './base-create-page-element.dto';

class CreatePageAssetElementValueDto {
  @IsUUID()
  assetId: string;
}

class CreatePageAssetElementDto extends BaseCreatePageElementDto {
  @IsOptional()
  @ValidateNested()
  value?: CreatePageAssetElementValueDto;
}

export { CreatePageAssetElementDto, CreatePageAssetElementValueDto };
