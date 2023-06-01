import { Controller, Post } from '@nestjs/common';
import {
  ARCHIVE_ASSET_SLUG,
  ENDPOINT_ASSETS_SLUG,
  FIND_MANY_ASSETS_ACTIVE_SLUG,
  FIND_MANY_ASSETS_ARCHIVED_SLUG,
  UPLOAD_ASSET_SLUG,
} from './assets-manager.constants';

@Controller(ENDPOINT_ASSETS_SLUG)
export class AssetsManagerController {
  @Post(UPLOAD_ASSET_SLUG)
  upload() {
    return;
  }

  @Post(ARCHIVE_ASSET_SLUG)
  archive() {
    return;
  }

  @Post(FIND_MANY_ASSETS_ACTIVE_SLUG)
  findManyActive() {
    return;
  }

  @Post(FIND_MANY_ASSETS_ARCHIVED_SLUG)
  findManyArchived() {
    return;
  }
}
