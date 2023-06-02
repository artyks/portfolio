import { IsUUID } from 'class-validator';

class FindOnePageDraftDto {
  @IsUUID()
  id: string;
}

export { FindOnePageDraftDto };
