import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const getPagesTransport = () => {
  if (!process.env.BE_PAGES_HOST) {
    throw new Error("Provide 'BE_PAGES_HOST' env variable");
  }
  if (!process.env.BE_PAGES_PORT) {
    throw new Error("Provide 'BE_PAGES_PORT' env variable");
  }
  const transportOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.BE_PAGES_HOST,
      port: parseInt(process.env.BE_PAGES_PORT),
    },
  };
  return transportOptions;
};

export { getPagesTransport };
