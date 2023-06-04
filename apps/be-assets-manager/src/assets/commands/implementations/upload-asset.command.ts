import { UploadAssetDto } from '@be-assets-manager/dtos';
import { ICommand } from '@nestjs/cqrs';

class UploadAssetCommand implements ICommand {
  constructor(public readonly payload: UploadAssetDto) {}
}

export { UploadAssetCommand };
