import { ClientProvider, ClientProviderOptions, Transport } from '@nestjs/microservices';

const GLOBAL_EVENT_BUS_CLIENT_NAME = 'GLOBAL_EVENT_BUS_CLIENT_NAME';

const getGlobalEventBusTransport = () => {
  if (!process.env.BE_REDIS_HOST) {
    throw new Error("Provide 'BE_REDIS_HOST' env variable");
  }
  if (!process.env.BE_REDIS_PORT) {
    throw new Error("Provide 'BE_REDIS_PORT' env variable");
  }
  const transportOptions = {
    transport: Transport.REDIS,
    options: {
      host: process.env.BE_REDIS_HOST,
      port: parseInt(process.env.BE_REDIS_PORT),
    },
  };
  return transportOptions;
};

const getGlobalEventBusClient = (): ClientProviderOptions => {
  return {
    name: GLOBAL_EVENT_BUS_CLIENT_NAME,
    ...(getGlobalEventBusTransport() as ClientProvider),
  };
};

export { getGlobalEventBusTransport, getGlobalEventBusClient, GLOBAL_EVENT_BUS_CLIENT_NAME };
