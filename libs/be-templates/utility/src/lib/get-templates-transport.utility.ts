import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const getTemplatesTransport = () => {
  if (!process.env.BE_TEMPLATES_HOST) {
    throw new Error("Provide 'BE_TEMPLATES_HOST' env variable");
  }
  if (!process.env.BE_TEMPLATES_PORT) {
    throw new Error("Provide 'BE_TEMPLATES_PORT' env variable");
  }
  const transportOptions: MicroserviceOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.BE_TEMPLATES_HOST,
      port: parseInt(process.env.BE_TEMPLATES_PORT),
    },
  };
  return transportOptions;
};

export { getTemplatesTransport };
