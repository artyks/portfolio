import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/pages-read-client';

@Injectable()
class PagesPrismaReadModelClient extends PrismaClient {}

export { PagesPrismaReadModelClient };
