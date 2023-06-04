import { ClientProvider, ClientProviderOptions, Transport } from '@nestjs/microservices';

const TEMPLATES_CLIENT_NAME = 'TEMPLATES_CLIENT_NAME';

const getTemplatesTransport = () => {
  if (!process.env.BE_TEMPLATES_HOST) {
    throw new Error("Provide 'BE_TEMPLATES_HOST' env variable");
  }
  if (!process.env.BE_TEMPLATES_PORT) {
    throw new Error("Provide 'BE_TEMPLATES_PORT' env variable");
  }
  const transportOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.BE_TEMPLATES_HOST,
      port: parseInt(process.env.BE_TEMPLATES_PORT),
    },
  };
  return transportOptions;
};

const getTemplatesClient = (): ClientProviderOptions => {
  return { name: TEMPLATES_CLIENT_NAME, ...(getTemplatesTransport() as ClientProvider) };
};

export { getTemplatesTransport, getTemplatesClient, TEMPLATES_CLIENT_NAME };
