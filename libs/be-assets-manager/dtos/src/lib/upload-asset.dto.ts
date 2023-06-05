import { UPLOAD_ASSET_DTO_FILE_KEY } from '@be-assets-manager/constants';
import 'multer';
// import { IsUUID, ValidateIf } from 'class-validator';

class UploadAssetDto {
  /**
   * Consider null as a root directory or parent folder absence
   */
  // @IsUUID()
  // @ValidateIf((_, value) => value !== null)
  // folderId: string | null;

  [UPLOAD_ASSET_DTO_FILE_KEY]: Express.Multer.File;
}

export { UploadAssetDto };
