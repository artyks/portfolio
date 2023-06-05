import 'multer';
import mime from 'mime-types';
import sizeOf from 'image-size';

import { AggregateRoot } from '@nestjs/cqrs';
import { UploadAssetDto } from '@be-assets-manager/dtos';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { SUPPORTED_IMAGE_FILE_EXTENSIONS } from '@be-assets-manager/constants';
import { Prisma, Asset } from '@prisma-clients/assets-write-model';
import { AssetStorageUploadInput } from '@be-assets-manager/types';

type AssetUpdate = { where: { id: string }; data: Prisma.AssetUpdateInput };

class AssetModel<PayloadT extends UploadAssetDto | Asset> extends AggregateRoot {
  private id: string;
  private fileName: string;
  private mimetype: string;
  private isArchived = false;
  private imageWidth: number | null;
  private imageHeight: number | null;
  private url?: string;
  private size?: number;

  private _fileExtension?: string;
  private _isImage = false;
  private _buffer?: Buffer;

  constructor(payload: PayloadT) {
    super();
    this.initAsset(payload);
  }

  isImage() {
    return this._isImage;
  }

  setUrl(url: string) {
    this.url = url;
  }

  getUploadInput(): AssetStorageUploadInput {
    if (!this._buffer) {
      throw new InternalServerErrorException('No buffer setted');
    }
    return {
      mimetype: this.mimetype,
      buffer: this._buffer,
      blobName: this.resolveBlobName(this.fileName),
    };
  }

  archiveAsset() {
    this.isArchived = true;
  }

  getAssetCreateInput(): Prisma.AssetCreateInput {
    if (!this.url) {
      throw new InternalServerErrorException('No URL to asset was provided');
    }
    if (this.size === undefined) {
      throw new InternalServerErrorException('Asset size is undefined');
    }
    return {
      id: this.id,
      isArchived: this.isArchived,
      fileName: this.fileName,
      mimetype: this.mimetype,
      size: this.size,
      url: this.url,
      imageHeight: this.imageHeight,
      imageWidth: this.imageWidth,
    };
  }

  getAssetUpdate(): AssetUpdate {
    if (!this.url) {
      throw new InternalServerErrorException('No URL to asset was provided');
    }
    if (this.size === undefined) {
      throw new InternalServerErrorException('Asset size is undefined');
    }
    return {
      where: { id: this.id },
      data: {
        id: this.id,
        isArchived: this.isArchived,
        fileName: this.fileName,
        mimetype: this.mimetype,
        size: this.size,
        url: this.url,
        imageHeight: this.imageHeight,
        imageWidth: this.imageWidth,
      },
    };
  }

  private resolveBlobName(fileName: string) {
    return `portfolio-assets/${this.id}/${encodeURIComponent(fileName)}`;
  }

  private isImageExtension(extension: string) {
    return new Set<string>(SUPPORTED_IMAGE_FILE_EXTENSIONS).has(extension);
  }

  private initAsset(payload: PayloadT) {
    if (payload instanceof UploadAssetDto) {
      const ext = mime.extension(payload.file.mimetype);
      if (!ext) {
        throw new BadRequestException('Cannot retrieve file extension');
      }
      this._fileExtension = ext;
      if (this.isImageExtension(ext)) {
        this._isImage = true;
        const { width, height } = sizeOf(payload.file.buffer);
        this.imageHeight = height || null;
        this.imageWidth = width || null;
      }
      this.id = crypto.randomUUID();
      this.mimetype = payload.file.mimetype;
      this.fileName = payload.file.originalname;
      this._buffer = payload.file.buffer;
    } else {
      /* Handle asset retrieved from database */
      this.id = payload.id;
      this.fileName = payload.fileName;
      this.imageHeight = payload.imageHeight;
      this.imageWidth = payload.imageWidth;
      this.isArchived = payload.isArchived;
      this.size = payload.size;
      this.mimetype = payload.mimetype;
      this._fileExtension = mime.extension(payload.mimetype) || undefined;
      this.url = payload.url;
    }
  }
}

export { AssetModel };
