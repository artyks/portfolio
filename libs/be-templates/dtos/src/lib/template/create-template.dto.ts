import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { CreateTemplateElementDto } from './element/create-template-element.dto';
import { BaseMetaDto } from '@common/dtos';

class CreateTemplateDto extends BaseMetaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateNested()
  elements: CreateTemplateElementDto[];
}

export { CreateTemplateDto };
