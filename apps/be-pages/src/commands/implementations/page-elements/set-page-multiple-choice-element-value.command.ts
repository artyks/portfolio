import { SetPageMultipleChoiceElementValueDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class SetPageMultipleChoiceElementValueCommand implements ICommand {
  constructor(public readonly payload: SetPageMultipleChoiceElementValueDto) {}
}

export { SetPageMultipleChoiceElementValueCommand };
