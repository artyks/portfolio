import { EsSetPageDateTimeElementValueDto } from '@be-pages/types';
import { IEvent } from '@nestjs/cqrs';

class PageDateTimeElementValueSettedEvent implements IEvent {
  constructor(public readonly payload: EsSetPageDateTimeElementValueDto) {}
}

export { PageDateTimeElementValueSettedEvent };
