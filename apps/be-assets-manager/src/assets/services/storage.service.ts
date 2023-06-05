import { Bucket, Storage } from '@google-cloud/storage';
import { IdempotencyStrategy } from '@google-cloud/storage/build/src/storage';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import path from 'path';
import { AssetsManagerConfig } from '../config/config.interface';
import { AssetStorageUploadInput, AssetStorageUploadResult } from '@be-assets-manager/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const __non_webpack_require__: any;

@Injectable()
class StorageService {
  private readonly bucketClient: Bucket;

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
     * Set bucket client
     */
    const bucketName = this.configService.get('GOOGLE_STORAGE_BUCKET_NAME', { infer: true });
    this.bucketClient = storage.bucket(bucketName);
  }

  async upload({ blobName, buffer, mimetype }: AssetStorageUploadInput): Promise<AssetStorageUploadResult> {
    return new Promise((resolve, reject) => {
      const file = this.bucketClient.file(blobName);

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
        try {
          await file.makePublic();
          resolve({ url: file.publicUrl() });
        } catch (_) {
          reject(`File uploaded, but public access is denied!`);
        }
      });

      stream.end(buffer);
    });
  }
}

export { StorageService };
