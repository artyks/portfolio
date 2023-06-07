import { EsSetPageTextElementValueDto } from '@be-pages/types';
import { IEvent } from '@nestjs/cqrs';

class PageTextElementValueSettedEvent implements IEvent {
  constructor(public readonly payload: EsSetPageTextElementValueDto) {}
}

export { PageTextElementValueSettedEvent };
