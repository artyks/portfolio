import { EsSetPageNumberElementValueDto } from '@be-pages/types';
import { IEvent } from '@nestjs/cqrs';

class PageNumberElementValueSettedEvent implements IEvent {
  constructor(public readonly payload: EsSetPageNumberElementValueDto) {}
}

export { PageNumberElementValueSettedEvent };
