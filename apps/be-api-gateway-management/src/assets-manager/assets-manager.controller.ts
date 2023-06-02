import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ARCHIVE_ASSET_SLUG, ENDPOINT_ASSETS_SLUG, UPLOAD_ASSET_SLUG } from './assets-manager.constants';
import { ArchiveAssetDto, FindManyAssetsDto, UploadAssetDto } from '@be-assets-manager/dtos';

@Controller(ENDPOINT_ASSETS_SLUG)
class AssetsManagerController {
  @Post(UPLOAD_ASSET_SLUG)
  upload(@Body() payload: UploadAssetDto) {
    return;
  }

  @Post(ARCHIVE_ASSET_SLUG)
  archive(@Body() payload: ArchiveAssetDto) {
    return;
  }

  @Get()
  findMany(@Query() query: FindManyAssetsDto) {
    return;
  }
}

export { AssetsManagerController };
