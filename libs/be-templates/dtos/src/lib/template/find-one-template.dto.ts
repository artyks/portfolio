import { IsUUID } from 'class-validator';

class FindOneTemplateDto {
  @IsUUID()
  id: string;
}

export { FindOneTemplateDto };
