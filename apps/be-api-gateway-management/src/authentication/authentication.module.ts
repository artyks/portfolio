import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { ClientsModule } from '@nestjs/microservices';
import { getAuthenticationClient } from '@be-authentication/utility';
import { LocalStrategy } from './strategies/auth-local.strategy';
import { PassportModule } from '@nestjs/passport';
import { APP_GUARD } from '@nestjs/core';
import { SessionSerializer } from './serializers/session.serializer';
import { AuthWriteModule } from '@prisma-clients/authentication-write-model';
import { AuthenticatedGuard } from './guards/authenticated.guard';

@Module({
  imports: [
    ClientsModule.register([getAuthenticationClient()]),
    PassportModule.register({ session: true }),
    AuthWriteModule,
  ],
  controllers: [AuthenticationController],
  providers: [
    LocalStrategy,
    {
      provide: APP_GUARD,
      useClass: AuthenticatedGuard,
    },
    SessionSerializer,
  ],
})
export class AuthenticationModule {}
