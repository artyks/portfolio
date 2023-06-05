import {
  ARCHIVE_ASSET_EVENT,
  FIND_MANY_ASSETS_MESSAGE,
  MAX_UPLOADED_FILE_SIZE_IN_BYTES,
  UPLOAD_ASSET_DTO_FILE_KEY,
} from '@be-assets-manager/constants';
import { ArchiveAssetDto, FindManyAssetsDto, UploadAssetDto } from '@be-assets-manager/dtos';
import {
  Body,
  Controller,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { UploadAssetCommand } from '../../commands/implementations/upload-asset.command';
import { ArchiveAssetCommand } from '../../commands/implementations/archive-asset.command';
import { FileInterceptor } from '@nestjs/platform-express';

const uploadAssetParseFilePipe = new ParseFilePipe({
  validators: [new MaxFileSizeValidator({ maxSize: MAX_UPLOADED_FILE_SIZE_IN_BYTES })],
});

@Controller()
class AssetsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @UseInterceptors(FileInterceptor(UPLOAD_ASSET_DTO_FILE_KEY))
  async handleAssetUpload(
    @Body() payload: Omit<UploadAssetDto, typeof UPLOAD_ASSET_DTO_FILE_KEY>,
    @UploadedFile(uploadAssetParseFilePipe) file: Express.Multer.File,
  ) {
    return this.commandBus.execute(new UploadAssetCommand({ ...payload, file }));
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
