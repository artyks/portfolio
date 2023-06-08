import { BaseMetaDto } from '@common/dtos';
import { IsNotEmpty, IsString } from 'class-validator';

class UploadAssetDto extends BaseMetaDto {
  @IsString()
  @IsNotEmpty()
  privateBlobName: string;

  @IsString()
  @IsNotEmpty()
  mimetype: string;

  @IsString()
  @IsNotEmpty()
  originalname: string;
}

export { UploadAssetDto };
