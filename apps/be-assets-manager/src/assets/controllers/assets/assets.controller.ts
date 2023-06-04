import { UPLOAD_ASSET_EVENT, ARCHIVE_ASSET_EVENT, FIND_MANY_ASSETS_MESSAGE } from '@be-assets-manager/constants';
import { ArchiveAssetDto, FindManyAssetsDto, UploadAssetDto } from '@be-assets-manager/dtos';
import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UploadAssetCommand } from '../../commands/implementations/upload-asset.command';
import { ArchiveAssetCommand } from '../../commands/implementations/archive-asset.command';

@Controller()
class AssetsController {
  constructor(private readonly commandBus: CommandBus) {}

  @EventPattern(UPLOAD_ASSET_EVENT)
  async handleAssetUpload(@Payload() payload: UploadAssetDto) {
    return this.commandBus.execute(new UploadAssetCommand(payload));
  }

  @EventPattern(ARCHIVE_ASSET_EVENT)
  async handleAssetArchive(@Payload() payload: ArchiveAssetDto) {
    return this.commandBus.execute(new ArchiveAssetCommand(payload));
  }

  @MessagePattern(FIND_MANY_ASSETS_MESSAGE)
  findMany(@Payload() payload: FindManyAssetsDto) {
    return;
  }
}

export { AssetsController };
