import { TemplateElementType } from '@be-templates/constants';
import { IsIn, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

class CreateTemplateElementDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  codename: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsIn(Object.values(TemplateElementType))
  type: TemplateElementType;
}

export { CreateTemplateElementDto };
