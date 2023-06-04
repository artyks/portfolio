import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/templates-pages-write-client';

@Injectable()
class TemplatesPagesPrismaWriteModelClient extends PrismaClient {}

export { TemplatesPagesPrismaWriteModelClient };
