import { EsSetPageAssetElementValueDto } from '@be-pages/types';
import { IEvent } from '@nestjs/cqrs';

class PageAssetElementValueSettedEvent implements IEvent {
  constructor(public readonly payload: EsSetPageAssetElementValueDto) {}
}

export { PageAssetElementValueSettedEvent };
