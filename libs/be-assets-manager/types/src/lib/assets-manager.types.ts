type AssetStorageUploadInput = {
  blobName: string;
  buffer: Buffer;
  mimetype: string;
};

type AssetStorageUploadResult = {
  url: string;
};

export type { AssetStorageUploadInput, AssetStorageUploadResult };
