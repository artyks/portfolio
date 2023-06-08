import { BaseMetaDto } from '@common/dtos';
import { IsUUID } from 'class-validator';

class ArchiveTemplateDto extends BaseMetaDto {
  @IsUUID()
  id: string;
}

export { ArchiveTemplateDto };
