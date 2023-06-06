import { ClientProvider, ClientProviderOptions, Transport } from '@nestjs/microservices';

const IMAGE_PROCESSING_CLIENT_NAME = 'IMAGE_PROCESSING_CLIENT_NAME';

const getImageProcessingTransport = () => {
  if (!process.env.BE_IMAGE_PROCESSING_HOST) {
    throw new Error("Provide 'BE_IMAGE_PROCESSING_HOST' env variable");
  }
  if (!process.env.BE_IMAGE_PROCESSING_PORT) {
    throw new Error("Provide 'BE_IMAGE_PROCESSING_PORT' env variable");
  }
  const transportOptions = {
    transport: Transport.TCP,
    options: {
      host: process.env.BE_IMAGE_PROCESSING_HOST,
      port: parseInt(process.env.BE_IMAGE_PROCESSING_PORT),
    },
  };
  return transportOptions;
};

const getImageProcessingClient = (): ClientProviderOptions => {
  return {
    name: IMAGE_PROCESSING_CLIENT_NAME,
    ...(getImageProcessingTransport() as ClientProvider),
  };
};

export { getImageProcessingTransport, getImageProcessingClient, IMAGE_PROCESSING_CLIENT_NAME };
