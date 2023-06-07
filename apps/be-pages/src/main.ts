import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { getPagesTransport } from '@be-pages/utility';
import { LogRpcExceptionsFilter } from '@common/exception-filtres';
import { getGlobalEventBusTransport } from '@be-global-event-bus';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  /**
   * Connect transports
   */
  const pagesTransport = getPagesTransport();
  const evenBusTransport = getGlobalEventBusTransport();
  app.connectMicroservice(pagesTransport, { inheritAppConfig: true });
  app.connectMicroservice(evenBusTransport, { inheritAppConfig: true });

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
   * Initialise NestJs lifecycle events
   */
  await app.init();

  /**
   * Start microservices
   */
  await app.startAllMicroservices();

  const {
    options: { host, port: TCP_PORT },
  } = pagesTransport;

  const {
    options: { host: EVENT_BUS_HOST, port: EVENT_BUS_PORT },
  } = evenBusTransport;

  Logger.log(`🚀 Pages TCP Service is listening on: ${host}:${TCP_PORT}.`);
  Logger.log(`🚀 Pages Service subscribed to Redis Event Bus on: ${EVENT_BUS_HOST}:${EVENT_BUS_PORT}.`);
};

bootstrap();
