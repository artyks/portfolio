import { CreatePageDraftDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class CreatePageDraftCommand implements ICommand {
  constructor(public readonly payload: CreatePageDraftDto) {}
}

export { CreatePageDraftCommand };
