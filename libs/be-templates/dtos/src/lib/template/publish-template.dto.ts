import { BaseMetaDto } from '@common/dtos';
import { IsUUID } from 'class-validator';

class PublishTemplateDto extends BaseMetaDto {
  @IsUUID()
  id: string;
}

export { PublishTemplateDto };
