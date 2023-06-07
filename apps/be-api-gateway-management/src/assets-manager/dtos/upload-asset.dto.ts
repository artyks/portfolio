import 'multer';
import { UPLOAD_ASSET_DTO_FILE_KEY } from '../constants/assets-manager.constants';

class UploadAssetDto {
  [UPLOAD_ASSET_DTO_FILE_KEY]: Express.Multer.File;
}

export { UploadAssetDto };
