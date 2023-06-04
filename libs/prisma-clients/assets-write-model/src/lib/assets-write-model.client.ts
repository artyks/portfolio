import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/assets-write-client';

@Injectable()
class AssetsPrismaWriteModelClient extends PrismaClient {}

export { AssetsPrismaWriteModelClient };
