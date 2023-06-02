import { IsUUID } from 'class-validator';
import { CreateTemplateDto } from './create-template.dto';

class ReplaceContentTypeDto extends CreateTemplateDto {
  @IsUUID()
  id: string;
}

export { ReplaceContentTypeDto };
