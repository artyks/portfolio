import { FindManyPageDraftsDto } from '@be-pages/dtos';
import { IQuery } from '@nestjs/cqrs';

class FindManyPageDraftsQuery implements IQuery {
  constructor(public readonly payload: FindManyPageDraftsDto) {}
}

export { FindManyPageDraftsQuery };
