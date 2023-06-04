import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { Config } from './config/config.interface';

const bootstrap = async () => {
  /**
   * Create NestJs application
   */
  const app = await NestFactory.create(AppModule);

  /**
   * Retrieve config variables
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

  /**
   * Start server
   */
  await app.listen(PORT, HOST);
  Logger.log(`🚀 Application is running on: ${HOST}:${PORT}/${GLOBAL_PREFIX}`);
};

bootstrap();
