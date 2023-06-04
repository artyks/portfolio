import { SetPageNumberElementValueDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class SetPageNumberElementValueCommand implements ICommand {
  constructor(public readonly payload: SetPageNumberElementValueDto) {}
}

export { SetPageNumberElementValueCommand };
