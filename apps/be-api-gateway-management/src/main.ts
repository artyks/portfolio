import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { Config } from './config/config.interface';

import { LogRpcExceptionsFilter } from '@common/exception-filtres';
import { getGlobalEventBusTransport } from '@be-global-event-bus';

const bootstrap = async () => {
  /**
   * Create NestJs application
   */
  const app = await NestFactory.create(AppModule);

  /**
   * Connect transports
   */
  const evenBusTransport = getGlobalEventBusTransport();
  app.connectMicroservice(evenBusTransport, { inheritAppConfig: true });

  /**
   * Apply global pipes and filters
   */
  const configService: ConfigService<Config, true> = app.get(ConfigService);
  const { HOST, PORT, GLOBAL_PREFIX } = configService.get('SERVER', { infer: true });

  /**
   * Configure app
   */
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.useGlobalFilters(new LogRpcExceptionsFilter());

  const {
    options: { host: EVENT_BUS_HOST, port: EVENT_BUS_PORT },
  } = evenBusTransport;

  /**
   * Start server
   */
  await app.listen(PORT, HOST);
  Logger.log(`🚀 Management API Gateway is running on: ${HOST}:${PORT}/${GLOBAL_PREFIX}`);
  Logger.log(`🚀 Management API Gateway subscribed to Redis Event Bus on: ${EVENT_BUS_HOST}:${EVENT_BUS_PORT}.`);
};

bootstrap();
