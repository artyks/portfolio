import { SetPageAssetElementValueDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class SetPageAssetElementValueCommand implements ICommand {
  constructor(public readonly payload: SetPageAssetElementValueDto) {}
}

export { SetPageAssetElementValueCommand };
