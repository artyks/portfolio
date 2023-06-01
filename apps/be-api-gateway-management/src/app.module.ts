import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import loadConfig from './config/config';
import { AppController } from './app.controller';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadConfig],
    }),
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
