import { ARCHIVE_ASSET_EVENT, FIND_MANY_ASSETS_MESSAGE, UPLOAD_ASSET_EVENT } from '@be-assets-manager/constants';
import { ArchiveAssetDto, FindManyAssetsDto, UploadAssetDto } from '@be-assets-manager/dtos';
import { Body, Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UploadAssetCommand } from '../../commands/implementations/upload-asset.command';
import { ArchiveAssetCommand } from '../../commands/implementations/archive-asset.command';
import { logError } from '@common/utility';

@Controller()
class AssetsController {
  constructor(private readonly commandBus: CommandBus) {}

  @EventPattern(UPLOAD_ASSET_EVENT)
  async handleAssetUpload(@Body() payload: UploadAssetDto) {
    this.commandBus.execute(new UploadAssetCommand(payload)).catch(logError);
  }

  @EventPattern(ARCHIVE_ASSET_EVENT)
  async handleAssetArchive(@Payload() payload: ArchiveAssetDto) {
    this.commandBus.execute(new ArchiveAssetCommand(payload)).catch(logError);
  }

  @MessagePattern(FIND_MANY_ASSETS_MESSAGE)
  findMany(@Payload() payload: FindManyAssetsDto) {
    return;
  }
}

export { AssetsController };
