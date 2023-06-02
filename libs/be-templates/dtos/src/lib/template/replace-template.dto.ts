import { IsUUID } from 'class-validator';
import { CreateTemplateDto } from './create-template.dto';

class ReplaceTemplateDto extends CreateTemplateDto {
  @IsUUID()
  id: string;
}

export { ReplaceTemplateDto };
