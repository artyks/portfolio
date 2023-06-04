import { IsDateString, IsOptional } from 'class-validator';
import { BaseCreatePageElementDto } from './base-create-page-element.dto';

class CreatePageDateTimeElementDto extends BaseCreatePageElementDto {
  @IsOptional()
  @IsDateString()
  value?: string;
}

export { CreatePageDateTimeElementDto };
