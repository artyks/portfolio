import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ARCHIVE_ASSET_SLUG, ENDPOINT_ASSETS_SLUG, UPLOAD_ASSET_SLUG } from './assets-manager.constants';
import { ArchiveAssetDto, FindManyAssetsDto, UploadAssetDto } from '@be-assets-manager/dtos';
import { ClientProxy } from '@nestjs/microservices';
import { ASSETS_MANAGER_CLIENT_NAME } from '@be-assets-manager/utility';
import { ARCHIVE_ASSET_EVENT, FIND_MANY_ASSETS_MESSAGE, UPLOAD_ASSET_EVENT } from '@be-assets-manager/constants';
import { firstValueFrom } from 'rxjs';

@Controller(ENDPOINT_ASSETS_SLUG)
class AssetsManagerController {
  constructor(@Inject(ASSETS_MANAGER_CLIENT_NAME) private readonly assetsManagerClient: ClientProxy) {}

  @Post(UPLOAD_ASSET_SLUG)
  upload(@Body() payload: UploadAssetDto) {
    this.assetsManagerClient.emit(UPLOAD_ASSET_EVENT, payload);
  }

  @Post(ARCHIVE_ASSET_SLUG)
  archive(@Body() payload: ArchiveAssetDto) {
    this.assetsManagerClient.emit(ARCHIVE_ASSET_EVENT, payload);
  }

  @Get()
  async findMany(@Query() payload: FindManyAssetsDto) {
    return await firstValueFrom(this.assetsManagerClient.send(FIND_MANY_ASSETS_MESSAGE, payload));
  }
}

export { AssetsManagerController };
