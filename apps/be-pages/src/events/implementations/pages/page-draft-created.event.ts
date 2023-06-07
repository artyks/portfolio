import { EsCreatePageDto } from '@be-pages/types';
import { IEvent } from '@nestjs/cqrs';

class PageDraftCreatedEvent implements IEvent {
  constructor(public readonly payload: EsCreatePageDto) {}
}

export { PageDraftCreatedEvent };
