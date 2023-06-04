import { UnpublishPageDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class UnpublishPageCommand implements ICommand {
  constructor(public readonly payload: UnpublishPageDto) {}
}

export { UnpublishPageCommand };
