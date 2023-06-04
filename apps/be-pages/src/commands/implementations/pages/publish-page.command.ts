import { PublishPageDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class PublishPageCommand implements ICommand {
  constructor(public readonly payload: PublishPageDto) {}
}

export { PublishPageCommand };
