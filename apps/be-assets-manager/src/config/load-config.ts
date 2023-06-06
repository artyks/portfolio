import { AssetsManagerConfig } from './config.type';

const loadAssetsConfig = (): AssetsManagerConfig => {
  if (!process.env.BE_ASSETS_MANAGER_HOST) {
    throw new Error("Provide 'BE_ASSETS_MANAGER_HOST' env variable");
  }
  if (!process.env.BE_ASSETS_MANAGER_HTTP_PORT) {
    throw new Error("Provide 'BE_ASSETS_MANAGER_HTTP_PORT' env variable");
  }
  if (!process.env.BE_ASSETS_MANAGER_TCP_PORT) {
    throw new Error("Provide 'BE_ASSETS_MANAGER_TCP_PORT' env variable");
  }

  return {
    HOST: process.env.BE_ASSETS_MANAGER_HOST,
    HTTP_PORT: parseInt(process.env.BE_ASSETS_MANAGER_HTTP_PORT, 10),
    TCP_PORT: parseInt(process.env.BE_ASSETS_MANAGER_TCP_PORT, 10),
  };
};

export { loadAssetsConfig };
