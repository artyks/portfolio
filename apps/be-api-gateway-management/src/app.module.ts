import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import loadConfig from './config/config';
import { AppController } from './app.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import { AssetsManagerModule } from './assets-manager/assets-manager.module';
import { PagesModule } from './pages/pages.module';
import { TemplatesModule } from './templates/templates.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadConfig],
    }),
    AuthenticationModule,
    AssetsManagerModule,
    PagesModule,
    TemplatesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
