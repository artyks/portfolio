import { SUPPORTED_OPTIMIZABLE_IMAGE_FILE_EXTENSIONS } from '@be-assets-manager/constants';
import { Injectable } from '@nestjs/common';
import sharp from 'sharp';
import mime from 'mime-types';

type ImageOptimisationOptions = {
  quality?: number;
  mimetype: string;
};

@Injectable()
class OptimisationService {
  async optimiseImage(buffer: Buffer, { quality = 70, mimetype }: ImageOptimisationOptions): Promise<Buffer | null> {
    const ext = mime.extension(mimetype);
    if (!ext || !this.isSuportedExt(ext)) {
      return null;
    }
    let resultBuffer;
    switch (ext) {
      case 'jpg':
        resultBuffer = await sharp(buffer).jpeg({ quality, mozjpeg: true }).toBuffer();
        break;
      case 'jpeg':
        resultBuffer = await sharp(buffer).jpeg({ quality, mozjpeg: true }).toBuffer();
        break;
      case 'png':
        resultBuffer = await sharp(buffer).png({ quality }).toBuffer();
        break;
      case 'webp':
        resultBuffer = await sharp(buffer).webp({ quality }).toBuffer();
        break;
      case 'tif':
        resultBuffer = await sharp(buffer).tiff({ quality, compression: 'webp' }).toBuffer();
        break;
      case 'tiff':
        resultBuffer = await sharp(buffer).tiff({ quality, compression: 'webp' }).toBuffer();
        break;
      default:
        return null;
    }
    return resultBuffer;
  }

  private isSuportedExt(ext: string) {
    return new Set<string>(SUPPORTED_OPTIMIZABLE_IMAGE_FILE_EXTENSIONS).has(ext);
  }
}

export { OptimisationService };

export type { ImageOptimisationOptions };
