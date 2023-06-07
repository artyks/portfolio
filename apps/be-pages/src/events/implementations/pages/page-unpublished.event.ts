import { EsUnpublishPageDto } from '@be-pages/types';
import { IEvent } from '@nestjs/cqrs';

class PageUnpublishedEvent implements IEvent {
  constructor(public readonly payload: EsUnpublishPageDto) {}
}

export { PageUnpublishedEvent };
