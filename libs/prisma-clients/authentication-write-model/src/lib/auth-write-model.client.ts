import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/authentication-write-client';

@Injectable()
class AuthPrismaWriteModelClient extends PrismaClient {}

export { AuthPrismaWriteModelClient };
