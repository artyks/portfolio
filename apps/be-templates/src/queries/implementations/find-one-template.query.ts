import { FindOneTemplateDto } from '@be-templates/dtos';
import { IQuery } from '@nestjs/cqrs';

class FindOneTemplateQuery implements IQuery {
  constructor(public readonly payload: FindOneTemplateDto) {}
}

export { FindOneTemplateQuery };
