import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { getAssetsManagerTransport } from '@be-assets-manager/utility';
import { LogRpcExceptionsFilter } from '@common/exception-filtres';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const assetsManagerTransport = getAssetsManagerTransport();

  app.connectMicroservice(assetsManagerTransport, { inheritAppConfig: true });

  /**
   * Apply global pipes and filters
   */
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalFilters(new LogRpcExceptionsFilter());

  /**
   * Start microservices
   */
  await app.startAllMicroservices();

  const {
    options: { host, port: TCP_PORT },
  } = assetsManagerTransport;

  Logger.log(`🚀 Assets Manager TCP Service is listening on: ${host}:${TCP_PORT}.`);
};

bootstrap();
