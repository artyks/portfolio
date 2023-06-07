import { ARCHIVE_ASSET_EVENT, FIND_MANY_ASSETS_MESSAGE, UPLOAD_ASSET_EVENT } from '@be-assets-manager/constants';
import { ArchiveAssetDto, FindManyAssetsDto, UploadAssetDto } from '@be-assets-manager/dtos';
import { Body, Controller } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UploadAssetCommand } from '../../commands/implementations/upload-asset.command';
import { ArchiveAssetCommand } from '../../commands/implementations/archive-asset.command';
import { logError } from '@common/utility';
import { FindManyAssetsQuery } from '../../queries/implementations/find-many-assets.query';

@Controller()
class AssetsController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @EventPattern(UPLOAD_ASSET_EVENT)
  async handleAssetUpload(@Body() payload: UploadAssetDto) {
    this.commandBus.execute(new UploadAssetCommand(payload)).catch(logError);
  }

  @EventPattern(ARCHIVE_ASSET_EVENT)
  async handleAssetArchive(@Payload() payload: ArchiveAssetDto) {
    this.commandBus.execute(new ArchiveAssetCommand(payload)).catch(logError);
  }

  @MessagePattern(FIND_MANY_ASSETS_MESSAGE)
  async findMany(@Payload() payload: FindManyAssetsDto) {
    return await this.queryBus.execute(new FindManyAssetsQuery(payload));
  }
}

export { AssetsController };
