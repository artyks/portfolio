import { SetPageTextElementValueDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class SetPageTextElementValueCommand implements ICommand {
  constructor(public readonly payload: SetPageTextElementValueDto) {}
}

export { SetPageTextElementValueCommand };
