import { ArchiveAssetDto } from '@be-assets-manager/dtos';
import { ICommand } from '@nestjs/cqrs';

class ArchiveAssetCommand implements ICommand {
  constructor(public readonly payload: ArchiveAssetDto) {}
}

export { ArchiveAssetCommand };
