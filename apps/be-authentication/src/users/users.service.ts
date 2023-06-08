import { RegisterUserDto } from '@be-authentication/dtos';
import { Injectable } from '@nestjs/common';
import { AuthPrismaWriteModelClient } from '@prisma-clients/authentication-write-model';

@Injectable()
class UsersService {
  constructor(private readonly prismaClient: AuthPrismaWriteModelClient) {}

  async findOneByEmail(email: string) {
    return await this.prismaClient.user.findUnique({ where: { email } });
  }

  async create(payload: RegisterUserDto) {
    return await this.prismaClient.user.create({ data: payload });
  }
}

export { UsersService };
