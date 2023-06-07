import { FindManyTemplatesDto } from '@be-templates/dtos';
import { IQuery } from '@nestjs/cqrs';

class FindManyTemplatesQuery implements IQuery {
  constructor(public readonly payload: FindManyTemplatesDto) {}
}

export { FindManyTemplatesQuery };
