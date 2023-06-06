import 'multer';
import mime from 'mime-types';
import sizeOf from 'image-size';
import crypto from 'crypto';

import { AggregateRoot } from '@nestjs/cqrs';
import { UploadAssetDto } from '@be-assets-manager/dtos';
import { SUPPORTED_IMAGE_FILE_EXTENSIONS } from '@be-assets-manager/constants';
import { Prisma, Asset } from '@prisma-clients/assets-write-model';
import { AssetStorageUploadInput } from '@be-assets-manager/types';
import { RpcException } from '@nestjs/microservices';

type AssetUpdate = { where: { id: string }; data: Prisma.AssetUpdateInput };

class AssetModel extends AggregateRoot {
  private id: string;
  private fileName: string;
  private mimetype: string;
  private isArchived = false;
  private imageWidth: number | null;
  private imageHeight: number | null;
  private url?: string;
  private size?: number;

  private _isImage = false;
  private _buffer?: Buffer;

  constructor() {
    super();
  }

  initAssetFromUploadDto(payload: UploadAssetDto) {
    const ext = mime.extension(payload.file.mimetype);
    if (!ext) {
      throw new RpcException('Cannot retrieve file extension');
    }
    if (this.isImageExtension(ext)) {
      this._isImage = true;
      this.size = Buffer.byteLength(payload.file.buffer);
      const { width, height } = sizeOf(payload.file.buffer);
      this.imageHeight = height || null;
      this.imageWidth = width || null;
    }
    this.id = crypto.randomUUID();
    this.mimetype = payload.file.mimetype;
    this.fileName = payload.file.originalname;
    this._buffer = payload.file.buffer;
  }

  initPersistedAsset(payload: Asset) {
    this.id = payload.id;
    this.fileName = payload.fileName;
    this.imageHeight = payload.imageHeight;
    this.imageWidth = payload.imageWidth;
    this.isArchived = payload.isArchived;
    this.size = payload.size;
    this.mimetype = payload.mimetype;
    this.url = payload.url;
  }

  archiveAsset() {
    this.isArchived = true;
  }

  isImage() {
    return this._isImage;
  }

  setUrl(url: string) {
    this.url = url;
  }

  setBuffer(buffer: Buffer) {
    this._buffer = buffer;
    this.size = Buffer.byteLength(buffer);
    const { width, height } = sizeOf(buffer);
    this.imageHeight = height || null;
    this.imageWidth = width || null;
  }

  getUploadInput(): AssetStorageUploadInput {
    if (!this._buffer) {
      throw new RpcException('No buffer setted');
    }
    return {
      mimetype: this.mimetype,
      buffer: this._buffer,
      blobName: this.resolveBlobName(this.fileName),
    };
  }

  getAssetCreateInput(): Prisma.AssetCreateInput {
    if (!this.url) {
      throw new RpcException('No URL to asset was provided');
    }
    if (this.size === undefined) {
      throw new RpcException('Asset size is undefined');
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
      throw new RpcException('No URL to asset was provided');
    }
    if (this.size === undefined) {
      throw new RpcException('Asset size is undefined');
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
    return `assets/${this.id}/${encodeURIComponent(fileName)}`;
  }

  private isImageExtension(extension: string) {
    return new Set<string>(SUPPORTED_IMAGE_FILE_EXTENSIONS).has(extension);
  }
}

export { AssetModel };
