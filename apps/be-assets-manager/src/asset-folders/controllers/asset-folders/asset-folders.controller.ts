import {
  CREATE_ASSET_FOLDER_EVENT,
  ARCHIVE_ASSET_FOLDER_EVENT,
  FIND_MANY_ASSET_FOLDERS_MESSAGE,
} from '@be-assets-manager/constants';
import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
class AssetFoldersController {
  @EventPattern(CREATE_ASSET_FOLDER_EVENT)
  handleAssetFolderCreate() {
    return;
  }

  @EventPattern(ARCHIVE_ASSET_FOLDER_EVENT)
  handleAssetFolderArchive() {
    return;
  }

  @MessagePattern(FIND_MANY_ASSET_FOLDERS_MESSAGE)
  findMany() {
    return;
  }
}

export { AssetFoldersController };
