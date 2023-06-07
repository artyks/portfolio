import { EsSetPageMultipleChoiceElementValueDto } from '@be-pages/types';
import { IEvent } from '@nestjs/cqrs';

class PageMultipleChoiceElementValueSettedEvent implements IEvent {
  constructor(public readonly payload: EsSetPageMultipleChoiceElementValueDto) {}
}

export { PageMultipleChoiceElementValueSettedEvent };
