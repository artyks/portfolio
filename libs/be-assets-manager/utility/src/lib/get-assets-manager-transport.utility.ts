import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const getAssetsManagerTransport = () => {
  if (!process.env.BE_ASSETS_MANAGER_HOST) {
    throw new Error("Provide 'BE_ASSETS_MANAGER_HOST' env variable");
  }
  if (!process.env.BE_ASSETS_MANAGER_PORT) {
    throw new Error("Provide 'BE_ASSETS_MANAGER_PORT' env variable");
  }
  const transportOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.BE_ASSETS_MANAGER_HOST,
      port: parseInt(process.env.BE_ASSETS_MANAGER_PORT),
    },
  };
  return transportOptions;
};

export { getAssetsManagerTransport };
