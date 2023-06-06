const UPLOAD_ASSET_DTO_FILE_KEY = 'file';

const SUPPORTED_IMAGE_FILE_EXTENSIONS = [
  'bmp',
  'cur',
  'dds',
  'gif',
  'icns',
  'ico',
  'j2c',
  'jp2',
  'jpeg',
  'jpg',
  'ktx',
  'png',
  'pnm',
  'psd',
  'svg',
  'tga',
  'tiff',
  'tif',
  'webp',
] as const;

const SUPPORTED_OPTIMIZABLE_IMAGE_FILE_EXTENSIONS = ['jpeg', 'jpg', 'png', 'webp', 'tiff', 'tif', 'avif'] as const;

export { UPLOAD_ASSET_DTO_FILE_KEY, SUPPORTED_IMAGE_FILE_EXTENSIONS, SUPPORTED_OPTIMIZABLE_IMAGE_FILE_EXTENSIONS };
