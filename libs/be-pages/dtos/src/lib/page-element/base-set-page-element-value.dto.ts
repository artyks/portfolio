import { BaseMetaDto } from '@common/dtos';
import { IsUUID } from 'class-validator';

class BaseSetPageElementValueDto extends BaseMetaDto {
  @IsUUID()
  elementId: string;
}

export { BaseSetPageElementValueDto };
