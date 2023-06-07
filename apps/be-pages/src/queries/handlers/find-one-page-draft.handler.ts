import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { FindOnePageDraftQuery } from '../implementations/find-one-page-draft.query';
import { FindOnePageDraftQueryResult } from '@be-pages/types';

@QueryHandler(FindOnePageDraftQuery)
class FindOnePageDraftHandler implements IQueryHandler<FindOnePageDraftQuery> {
  pageRepository: TemplatesPagesPrismaWriteModelClient['page'];

  constructor(pagesPrismaClient: TemplatesPagesPrismaWriteModelClient) {
    this.pageRepository = pagesPrismaClient.page;
  }

  async execute({ payload: { id } }: FindOnePageDraftQuery): Promise<FindOnePageDraftQueryResult> {
    return await this.pageRepository.findUnique({
      where: { id },
      include: { elements: true, template: true },
    });
  }
}

export { FindOnePageDraftHandler };
