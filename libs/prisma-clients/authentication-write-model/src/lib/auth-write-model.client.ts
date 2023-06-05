import { Injectable, INestApplication, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '.prisma/authentication-write-client';

@Injectable()
class AuthPrismaWriteModelClient extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

export { AuthPrismaWriteModelClient };
