import { FindOnePageDraftDto } from '@be-pages/dtos';
import { IQuery } from '@nestjs/cqrs';

class FindOnePageDraftQuery implements IQuery {
  constructor(public readonly payload: FindOnePageDraftDto) {}
}

export { FindOnePageDraftQuery };
