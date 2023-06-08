import { BaseMetaDto } from '@common/dtos';
import { IsUUID } from 'class-validator';

class ArchivePageDto extends BaseMetaDto {
  @IsUUID()
  id: string;
}

export { ArchivePageDto };
