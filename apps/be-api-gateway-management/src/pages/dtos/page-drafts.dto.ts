import { IsUUID } from 'class-validator';

class FindOnePageDraftParams {
  @IsUUID()
  id: string;
}

class FindManyPageDraftsQuery {}

export { FindOnePageDraftParams, FindManyPageDraftsQuery };
