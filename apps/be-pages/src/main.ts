import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { getPagesTransport } from '@be-pages/utility';

const bootstrap = async () => {
  const transport = getPagesTransport();
  const {
    options: { host, port },
  } = transport;
  const app = await NestFactory.createMicroservice(AppModule, transport);
  await app.listen();
  Logger.log(`🚀 Pages Service is listening on: ${host}:${port}.`);
};

bootstrap();
