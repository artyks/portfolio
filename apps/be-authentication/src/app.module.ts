import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AuthWriteModule } from '@prisma-clients/authentication-write-model';

@Module({
  imports: [AuthWriteModule, AuthenticationModule, UsersModule],
  providers: [UsersService],
})
class AppModule {}

export { AppModule };
