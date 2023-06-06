type AssetStorageUploadInput = {
  blobName: string;
  buffer: Buffer;
  mimetype: string;
};

type AssetStorageDownloadTempInput = {
  blobName: string;
};

type AssetStorageUploadPublicResult = {
  url: string;
};

type AssetStorageUploadTempResult = {
  blobName: string;
};

type AssetStorageDownloadTempResult = {
  buffer: Buffer;
};

export type {
  AssetStorageUploadInput,
  AssetStorageUploadPublicResult,
  AssetStorageUploadTempResult,
  AssetStorageDownloadTempInput,
  AssetStorageDownloadTempResult,
};
