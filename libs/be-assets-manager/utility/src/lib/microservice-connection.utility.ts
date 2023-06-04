import { ClientProvider, ClientProviderOptions, Transport } from '@nestjs/microservices';

const ASSETS_MANAGER_CLIENT_NAME = 'ASSETS_MANAGER_CLIENT_NAME';

const getAssetsManagerTransport = () => {
  if (!process.env.BE_ASSETS_MANAGER_HOST) {
    throw new Error("Provide 'BE_ASSETS_MANAGER_HOST' env variable");
  }
  if (!process.env.BE_ASSETS_MANAGER_PORT) {
    throw new Error("Provide 'BE_ASSETS_MANAGER_PORT' env variable");
  }
  const transportOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.BE_ASSETS_MANAGER_HOST,
      port: parseInt(process.env.BE_ASSETS_MANAGER_PORT),
    },
  };
  return transportOptions;
};

const getAssetsManagerClient = (): ClientProviderOptions => {
  return {
    name: ASSETS_MANAGER_CLIENT_NAME,
    ...(getAssetsManagerTransport() as ClientProvider),
  };
};

export { getAssetsManagerTransport, getAssetsManagerClient, ASSETS_MANAGER_CLIENT_NAME };
