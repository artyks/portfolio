import { IsUUID } from 'class-validator';

class ArchiveTemplateDto {
  @IsUUID()
  id: string;
}

export { ArchiveTemplateDto };
