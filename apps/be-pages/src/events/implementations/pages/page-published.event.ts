import { EsPublishPageDto } from '@be-pages/types';
import { IEvent } from '@nestjs/cqrs';

class PagePublishedEvent implements IEvent {
  constructor(public readonly payload: EsPublishPageDto) {}
}

export { PagePublishedEvent };
