import { EsArchivePageDto } from '@be-pages/types';
import { IEvent } from '@nestjs/cqrs';

class PageArchivedEvent implements IEvent {
  constructor(public readonly payload: EsArchivePageDto) {}
}

export { PageArchivedEvent };
