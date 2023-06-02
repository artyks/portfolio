import { IsUUID } from 'class-validator';

class ArchivePageDto {
  @IsUUID()
  id: string;
}

export { ArchivePageDto };
