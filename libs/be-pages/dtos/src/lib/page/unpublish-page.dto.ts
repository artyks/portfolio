import { BaseMetaDto } from '@common/dtos';
import { IsUUID } from 'class-validator';

class UnpublishPageDto extends BaseMetaDto {
  @IsUUID()
  id: string;
}

export { UnpublishPageDto };
