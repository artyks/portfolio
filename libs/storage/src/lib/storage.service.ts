import { Bucket, Storage } from '@google-cloud/storage';
import { IdempotencyStrategy } from '@google-cloud/storage/build/src/storage';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import {
  AssetStorageDownloadTempInput,
  AssetStorageDownloadTempResult,
  AssetStorageUploadInput,
  AssetStorageUploadPublicResult,
  AssetStorageUploadTempResult,
} from '@be-assets-manager/types';
import { AssetsManagerConfig } from './config/config.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const __non_webpack_require__: any;

@Injectable()
class StorageService {
  private readonly publicBucketClient: Bucket;
  private readonly tempBucketClient: Bucket;

  constructor(private readonly configService: ConfigService<AssetsManagerConfig, true>) {
    const credentialsPath = path.join(
      process.cwd(),
      this.configService.get('GOOGLE_APPLICATION_CREDENTIALS_FILENAME', { infer: true }),
    );

    const credentials = __non_webpack_require__(credentialsPath);

    if (!credentials) {
      throw new Error(`Storage credentials are not resolved, credentials: ${credentials}`);
    }

    /**
     * Configure Storage
     */
    const storage = new Storage({
      projectId: this.configService.get('GOOGLE_PROJECT_ID', { infer: true }),
      credentials: credentials,
      retryOptions: {
        autoRetry: true,
        retryDelayMultiplier: 3,
        totalTimeout: 500,
        maxRetryDelay: 60,
        maxRetries: 5,
        idempotencyStrategy: IdempotencyStrategy.RetryAlways,
      },
    });

    /**
     * Set bucket clients
     */
    const publicBucketName = this.configService.get('GOOGLE_STORAGE_PUBLIC_BUCKET_NAME', { infer: true });
    this.publicBucketClient = storage.bucket(publicBucketName);
    const tempBucketName = this.configService.get('GOOGLE_STORAGE_TEMP_BUCKET_NAME', { infer: true });
    this.tempBucketClient = storage.bucket(tempBucketName);
  }

  async uploadPublic({ blobName, buffer, mimetype }: AssetStorageUploadInput): Promise<AssetStorageUploadPublicResult> {
    return new Promise((resolve, reject) => {
      const file = this.publicBucketClient.file(blobName);

      const stream = file.createWriteStream({
        metadata: {
          contentType: mimetype,
          cacheControl: 'public, no-cache',
        },
        resumable: false,
      });

      stream.on('error', (err) => {
        reject(err);
      });

      stream.on('finish', async () => {
        resolve({ url: file.publicUrl() });
      });

      stream.end(buffer);
    });
  }

  async uploadTemp({ blobName, buffer, mimetype }: AssetStorageUploadInput): Promise<AssetStorageUploadTempResult> {
    return new Promise((resolve, reject) => {
      const file = this.tempBucketClient.file(blobName);

      const stream = file.createWriteStream({
        metadata: {
          contentType: mimetype,
          cacheControl: 'public, no-cache',
        },
        resumable: false,
      });

      stream.on('error', (err) => {
        reject(err);
      });

      stream.on('finish', () => {
        resolve({ blobName: file.name });
      });

      stream.end(buffer);
    });
  }

  async downloadTemp({ blobName }: AssetStorageDownloadTempInput): Promise<AssetStorageDownloadTempResult> {
    const file = this.tempBucketClient.file(blobName);
    const [buffer] = await file.download();
    return { buffer };
  }
}

export { StorageService };
