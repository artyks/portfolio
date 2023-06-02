import { IsUUID } from 'class-validator';

class SetPageAssetElementValueDto {
  @IsUUID()
  pageId: string;

  @IsUUID()
  elementId: string;

  /**
   * AssetId
   */
  @IsUUID()
  value: string;
}

export { SetPageAssetElementValueDto };
