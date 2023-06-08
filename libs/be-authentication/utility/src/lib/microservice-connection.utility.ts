import { ClientProvider, ClientProviderOptions, Transport } from '@nestjs/microservices';

const AUTHENTICATION_CLIENT_NAME = 'AUTHENTICATION_CLIENT_NAME';

const getAuthenticationTransport = () => {
  if (!process.env.BE_AUTHENTICATION_HOST) {
    throw new Error("Provide 'BE_AUTHENTICATION_HOST' env variable");
  }
  if (!process.env.BE_AUTHENTICATION_PORT) {
    throw new Error("Provide 'BE_AUTHENTICATION_PORT' env variable");
  }
  const transportOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.BE_AUTHENTICATION_HOST,
      port: parseInt(process.env.BE_AUTHENTICATION_PORT),
    },
  };
  return transportOptions;
};

const getAuthenticationClient = (): ClientProviderOptions => {
  return {
    name: AUTHENTICATION_CLIENT_NAME,
    ...(getAuthenticationTransport() as ClientProvider),
  };
};

export { getAuthenticationTransport, getAuthenticationClient, AUTHENTICATION_CLIENT_NAME };
