import { ArrayMinSize, IsArray, IsOptional } from 'class-validator';
import { BaseCreatePageElementDto } from './base-create-page-element.dto';

class CreatePageMultipleChoiceElementDto extends BaseCreatePageElementDto {
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  value?: string[];
}

export { CreatePageMultipleChoiceElementDto };
