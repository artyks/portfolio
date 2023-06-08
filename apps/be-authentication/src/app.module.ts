import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AuthPrismaWriteModelClient } from '@prisma-clients/authentication-write-model';

@Module({
  imports: [AuthPrismaWriteModelClient, AuthenticationModule, UsersModule],
  providers: [UsersService],
})
class AppModule {}

export { AppModule };
