import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { FindOneTemplateQuery } from '../implementations/find-one-template.query';
import { FindOneTemplateQueryResult } from '@be-templates/types';

@QueryHandler(FindOneTemplateQuery)
class FindOneTemplateHandler implements IQueryHandler<FindOneTemplateQuery> {
  templateRepository: TemplatesPagesPrismaWriteModelClient['template'];

  constructor(templatesPrismaClient: TemplatesPagesPrismaWriteModelClient) {
    this.templateRepository = templatesPrismaClient.template;
  }

  async execute({ payload: { id } }: FindOneTemplateQuery): Promise<FindOneTemplateQueryResult> {
    return await this.templateRepository.findUnique({
      where: { id },
      include: { elements: true, pages: true },
    });
  }
}

export { FindOneTemplateHandler };
