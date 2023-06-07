import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { TemplatesPagesPrismaWriteModelClient } from '@prisma-clients/templates-pages-write-model';
import { FindManyTemplatesQueryResult } from '@be-templates/types';
import { FindManyTemplatesQuery } from '../implementations/find-many-templates.query';

@QueryHandler(FindManyTemplatesQuery)
class FindManyTemplatesHandler implements IQueryHandler<FindManyTemplatesQuery> {
  templateRepository: TemplatesPagesPrismaWriteModelClient['template'];

  constructor(templatesPrismaClient: TemplatesPagesPrismaWriteModelClient) {
    this.templateRepository = templatesPrismaClient.template;
  }

  async execute({ payload }: FindManyTemplatesQuery): Promise<FindManyTemplatesQueryResult> {
    return await this.templateRepository.findMany({ where: payload });
  }
}

export { FindManyTemplatesHandler };
