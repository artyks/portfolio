import { Request } from 'express';
import 'multer';
import mime from 'mime-types';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Query,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ARCHIVE_ASSET_SLUG, ENDPOINT_ASSETS_SLUG, UPLOAD_ASSET_SLUG } from './assets-manager.constants';
import { ArchiveAssetDto, FindManyAssetsDto, UploadAssetDto } from '@be-assets-manager/dtos';
import { ClientProxy } from '@nestjs/microservices';
import { ASSETS_MANAGER_CLIENT_NAME, getAssetsManagerHTTPConnectionURLString } from '@be-assets-manager/utility';
import {
  ARCHIVE_ASSET_EVENT,
  FIND_MANY_ASSETS_MESSAGE,
  MAX_UPLOADED_FILE_SIZE_IN_BYTES,
  UPLOAD_ASSET_DTO_FILE_KEY,
} from '@be-assets-manager/constants';
import { firstValueFrom } from 'rxjs';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { HttpService } from '@nestjs/axios';
import FormData from 'form-data';

enum FileValidationErrors {
  UNSUPPORTED_FILE_TYPE = 'UNSUPPORTED_FILE_TYPE',
}

const uploadAssetParseFilePipe = new ParseFilePipe({
  validators: [new MaxFileSizeValidator({ maxSize: MAX_UPLOADED_FILE_SIZE_IN_BYTES })],
});

const fileFilter: MulterOptions['fileFilter'] = (req, file, cb) => {
  /**
   * Check out if file extension is valid and supported
   */
  const fileExtension = mime.extension(file.mimetype);
  if (fileExtension === false) {
    req.fileValidationError = FileValidationErrors.UNSUPPORTED_FILE_TYPE;
    cb(null, false);
  }

  /**
   * Parsing filename in UTF-8 format, to keep polish / german / etc. special characters
   */
  file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
  cb(null, true);
};

const composeMulterOptions = (): MulterOptions => {
  return {
    fileFilter,
  };
};

@Controller(ENDPOINT_ASSETS_SLUG)
class AssetsManagerController {
  constructor(
    @Inject(ASSETS_MANAGER_CLIENT_NAME) private readonly assetsManagerClient: ClientProxy,
    private readonly httpService: HttpService,
  ) {}

  @Post(UPLOAD_ASSET_SLUG)
  @UseInterceptors(FileInterceptor(UPLOAD_ASSET_DTO_FILE_KEY, composeMulterOptions()))
  async upload(
    @UploadedFile(uploadAssetParseFilePipe) file: Express.Multer.File,
    @Body() payload: Omit<UploadAssetDto, typeof UPLOAD_ASSET_DTO_FILE_KEY>,
    @Req() req: Request,
  ) {
    if ('fileValidationError' in req && req.fileValidationError === FileValidationErrors.UNSUPPORTED_FILE_TYPE) {
      throw new BadRequestException(`Cannot retrieve file extension: unknown file mimetype: '${file.mimetype}'`);
    }
    const formData = new FormData();
    formData.append(UPLOAD_ASSET_DTO_FILE_KEY, file.buffer, { filename: file.originalname });
    Object.entries(payload).forEach(([key, value]) => {
      if (key === UPLOAD_ASSET_DTO_FILE_KEY) {
        return;
      }
      formData.append(key, value);
    });
    return await firstValueFrom(
      this.httpService.post(getAssetsManagerHTTPConnectionURLString(), formData, {
        headers: {
          ...formData.getHeaders(),
          'Content-Length': formData.getLengthSync(),
        },
      }),
    );
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
