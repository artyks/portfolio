import { Module, Global } from '@nestjs/common';
import { AuthPrismaWriteModelClient } from './auth-write-model.client';

@Global()
@Module({
  providers: [AuthPrismaWriteModelClient],
  exports: [AuthPrismaWriteModelClient],
})
class AuthWriteModule {}

export { AuthWriteModule };
