import { SetPageDateTimeElementValueDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class SetPageDateTimeElementValueCommand implements ICommand {
  constructor(public readonly payload: SetPageDateTimeElementValueDto) {}
}

export { SetPageDateTimeElementValueCommand };
