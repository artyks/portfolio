import { ClientProviderOptions, TcpOptions, Transport } from '@nestjs/microservices';

const PAGES_CLIENT_NAME = 'PAGES_CLIENT_NAME';

const getPagesTransport = () => {
  if (!process.env.BE_PAGES_HOST) {
    throw new Error("Provide 'BE_PAGES_HOST' env variable");
  }
  if (!process.env.BE_PAGES_PORT) {
    throw new Error("Provide 'BE_PAGES_PORT' env variable");
  }
  const transportOptions: TcpOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.BE_PAGES_HOST,
      port: parseInt(process.env.BE_PAGES_PORT),
    },
  };
  return transportOptions;
};

const getPagesClient = (): ClientProviderOptions => {
  if (!process.env.BE_PAGES_HOST) {
    throw new Error("Provide 'BE_PAGES_HOST' env variable");
  }
  if (!process.env.BE_PAGES_PORT) {
    throw new Error("Provide 'BE_PAGES_PORT' env variable");
  }
  return {
    name: PAGES_CLIENT_NAME,
    transport: Transport.TCP,
    options: {
      host: process.env.BE_PAGES_HOST,
      port: parseInt(process.env.BE_PAGES_PORT),
    },
  };
};

export { getPagesTransport, getPagesClient, PAGES_CLIENT_NAME };
