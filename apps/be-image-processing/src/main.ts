import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { getImageProcessingTransport } from '@be-image-processing/utility';

const bootstrap = async () => {
  const transport = getImageProcessingTransport();
  const {
    options: { host, port },
  } = transport;
  const app = await NestFactory.createMicroservice(AppModule, transport);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen();
  Logger.log(`🚀 Image Processing Service is listening on: ${host}:${port}.`);
};

bootstrap();
