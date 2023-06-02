import { IsUUID } from 'class-validator';

class PublishTemplateDto {
  @IsUUID()
  id: string;
}

export { PublishTemplateDto };
