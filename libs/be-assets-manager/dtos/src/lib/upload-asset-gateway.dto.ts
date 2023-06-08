import { UploadAssetDto } from './upload-asset.dto';
import { OmitType } from '@nestjs/mapped-types';

class UploadAssetGatewayDto extends OmitType(UploadAssetDto, [
  'userId',
  'privateBlobName',
  'mimetype',
  'originalname',
] as const) {}

export { UploadAssetGatewayDto };
