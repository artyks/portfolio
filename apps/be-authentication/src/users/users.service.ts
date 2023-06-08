import { Injectable } from '@nestjs/common';
import { AuthPrismaWriteModelClient } from '@prisma-clients/authentication-write-model';

@Injectable()
class UsersService {
  constructor(private readonly prismaClient: AuthPrismaWriteModelClient) {}

  async findOneByEmail(email: string) {
    return await this.prismaClient.user.findUnique({ where: { email } });
  }
}

export { UsersService };
