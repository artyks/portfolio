import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { getAssetsManagerTransport } from '@be-assets-manager/utility';

const bootstrap = async () => {
  const assetsManagerTransport = getAssetsManagerTransport();
  const {
    options: { host, port },
  } = assetsManagerTransport;
  const app = await NestFactory.createMicroservice(AppModule, assetsManagerTransport);
  await app.listen();
  Logger.log(`🚀 Assets Manager is listening on: ${host}:${port}.`);
};

bootstrap();
