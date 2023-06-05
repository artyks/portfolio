import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { getAssetsManagerTransport } from '@be-assets-manager/utility';

// TODO: move it to env
const HTTP_PORT = 3001;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const assetsManagerTransport = getAssetsManagerTransport();

  app.connectMicroservice(assetsManagerTransport, { inheritAppConfig: true });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.startAllMicroservices();
  await app.listen(HTTP_PORT);

  const {
    options: { host, port: TCP_PORT },
  } = assetsManagerTransport;

  Logger.log(`🚀 Assets Manager TCP Service is listening on: ${host}:${TCP_PORT}.`);
  Logger.log(`🚀 Assets Manager HTTP Service is listening on: ${host}:${HTTP_PORT}.`);
};

bootstrap();
