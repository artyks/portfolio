import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateTemplateElementDto } from './element/create-template-element.dto';

class CreateTemplateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  elements: CreateTemplateElementDto[];
}

export { CreateTemplateDto };
