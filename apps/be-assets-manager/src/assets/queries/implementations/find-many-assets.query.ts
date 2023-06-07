import { FindManyAssetsDto } from '@be-assets-manager/dtos';
import { IQuery } from '@nestjs/cqrs';

class FindManyAssetsQuery implements IQuery {
  constructor(public readonly payload: FindManyAssetsDto) {}
}

export { FindManyAssetsQuery };
