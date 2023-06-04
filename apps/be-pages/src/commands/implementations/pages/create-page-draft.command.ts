import { CreatePageDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class CreatePageDraftCommand implements ICommand {
  constructor(public readonly payload: CreatePageDto) {}
}

export { CreatePageDraftCommand };
