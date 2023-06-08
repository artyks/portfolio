import { BaseMetaDto } from '@common/dtos';
import { IsUUID } from 'class-validator';

class PublishPageDto extends BaseMetaDto {
  @IsUUID()
  id: string;
}

export { PublishPageDto };
