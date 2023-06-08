import { BaseMetaDto } from '@common/dtos';
import { IsUUID } from 'class-validator';

class ArchiveAssetDto extends BaseMetaDto {
  @IsUUID()
  id: string;
}

export { ArchiveAssetDto };
