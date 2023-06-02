import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { getAssetsManagerTransport } from '@be-assets-manager/utility';

const bootstrap = async () => {
  const assetsManagerTransport = getAssetsManagerTransport();
  const {
    options: { host, port },
  } = assetsManagerTransport;
  const app = await NestFactory.createMicroservice(AppModule, assetsManagerTransport);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen();
  Logger.log(`🚀 Assets Manager Service is listening on: ${host}:${port}.`);
};

bootstrap();
