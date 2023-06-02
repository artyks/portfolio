import { UPLOAD_ASSET_EVENT, ARCHIVE_ASSET_EVENT, FIND_MANY_ASSETS_MESSAGE } from '@be-assets-manager/constants';
import { ArchiveAssetDto, FindManyAssetsDto, UploadAssetDto } from '@be-assets-manager/dtos';
import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
class AssetsController {
  @EventPattern(UPLOAD_ASSET_EVENT)
  handleAssetUpload(@Payload() payload: UploadAssetDto) {
    return;
  }

  @EventPattern(ARCHIVE_ASSET_EVENT)
  handleAssetArchive(@Payload() payload: ArchiveAssetDto) {
    return;
  }

  @MessagePattern(FIND_MANY_ASSETS_MESSAGE)
  findMany(@Payload() payload: FindManyAssetsDto) {
    return;
  }
}

export { AssetsController };
