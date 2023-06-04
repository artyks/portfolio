import { ArchivePageDto } from '@be-pages/dtos';
import { ICommand } from '@nestjs/cqrs';

class ArchivePageCommand implements ICommand {
  constructor(public readonly payload: ArchivePageDto) {}
}

export { ArchivePageCommand };
