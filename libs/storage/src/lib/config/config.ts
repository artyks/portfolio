import { AssetsManagerConfig } from './config.interface';

const loadAssetsManagerConfig = (): AssetsManagerConfig => {
  if (!process.env.GOOGLE_PROJECT_ID) {
    throw new Error("Provide 'GOOGLE_PROJECT_ID' env variable");
  }
  if (!process.env.GOOGLE_STORAGE_PUBLIC_BUCKET_NAME) {
    throw new Error("Provide 'GOOGLE_STORAGE_PUBLIC_BUCKET_NAME' env variable");
  }
  if (!process.env.GOOGLE_STORAGE_TEMP_BUCKET_NAME) {
    throw new Error("Provide 'GOOGLE_STORAGE_TEMP_BUCKET_NAME' env variable");
  }
  if (!process.env.GOOGLE_STORAGE_PUBLIC_CDN_URL) {
    throw new Error("Provide 'GOOGLE_STORAGE_PUBLIC_CDN_URL' env variable");
  }
  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_FILENAME) {
    throw new Error("Provide 'GOOGLE_APPLICATION_CREDENTIALS_FILENAME' env variable");
  }
  return {
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    GOOGLE_STORAGE_PUBLIC_BUCKET_NAME: process.env.GOOGLE_STORAGE_PUBLIC_BUCKET_NAME,
    GOOGLE_STORAGE_TEMP_BUCKET_NAME: process.env.GOOGLE_STORAGE_TEMP_BUCKET_NAME,
    GOOGLE_STORAGE_PUBLIC_CDN_URL: process.env.GOOGLE_STORAGE_PUBLIC_CDN_URL,
    GOOGLE_APPLICATION_CREDENTIALS_FILENAME: process.env.GOOGLE_APPLICATION_CREDENTIALS_FILENAME,
  };
};

export { loadAssetsManagerConfig };
