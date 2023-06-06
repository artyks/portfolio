import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { getAssetsManagerTransport } from '@be-assets-manager/utility';
import { ConfigService } from '@nestjs/config';
import { AssetsManagerConfig } from './config/config.type';
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
   * Retrieve config variables
   */
  const configService: ConfigService<AssetsManagerConfig, true> = app.get(ConfigService);
  const HTTP_PORT = configService.get('HTTP_PORT', { infer: true });

  /**
   * Start microservices
   */
  await app.startAllMicroservices();
  await app.listen(HTTP_PORT);

  const {
    options: { host, port: TCP_PORT },
  } = assetsManagerTransport;

  Logger.log(`🚀 Assets Manager TCP Service is listening on: ${host}:${TCP_PORT}.`);
  Logger.log(`🚀 Assets Manager HTTP Service is listening on: ${host}:${HTTP_PORT}.`);
};

bootstrap();
