import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { LogRpcExceptionsFilter } from '@common/exception-filtres';
import { getGlobalEventBusTransport } from '@be-global-event-bus';
import { AppModule } from './app.module';
import { Config } from './config/config.interface';
import session from 'express-session';
import passport from 'passport';
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient as AuthPrismaClient } from '@prisma-clients/authentication-write-model';

const bootstrap = async () => {
  /**
   * Create NestJs application
   */
  const app = await NestFactory.create(AppModule);

  /**
   * Connect to event bus
   */
  const evenBusTransport = getGlobalEventBusTransport();
  app.connectMicroservice(evenBusTransport, { inheritAppConfig: true });

  /**
   * Retrieve config envs
   */
  const configService: ConfigService<Config, true> = app.get(ConfigService);
  const { HOST, PORT, GLOBAL_PREFIX } = configService.get('SERVER', { infer: true });

  /**
   * Apply global settings
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

  /**
   * Apply middleware
   */
  app.use(
    session({
      name: 'MANAGEMENT_API_GATEWAY',
      secret: configService.get('SESSION_SECRET', { infer: true }),
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 24 hr
        secure: 'auto',
      },
      store: new PrismaSessionStore(new AuthPrismaClient(), {
        checkPeriod: 2 * 60 * 1000, // 2 min
        dbRecordIdIsSessionId: true,
      }),
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  const {
    options: { host: EVENT_BUS_HOST, port: EVENT_BUS_PORT },
  } = evenBusTransport;

  /**
   * Initialise NestJs lifecycle events
   */
  await app.init();

  /**
   * Start connection with Redis transport (Event Bus)
   */
  await app.startAllMicroservices();
  Logger.log(`🚀 Management API Gateway subscribed to Redis Event Bus on: ${EVENT_BUS_HOST}:${EVENT_BUS_PORT}.`);

  /**
   * Start HTTP server
   */
  await app.listen(PORT, HOST);
  Logger.log(`🚀 Management API Gateway is running on: ${HOST}:${PORT}/${GLOBAL_PREFIX}`);
};

bootstrap();
