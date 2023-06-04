import { IsNumber, IsOptional } from 'class-validator';
import { BaseCreatePageElementDto } from './base-create-page-element.dto';

class CreatePageNumberElementDto extends BaseCreatePageElementDto {
  @IsOptional()
  @IsNumber()
  value?: number;
}

export { CreatePageNumberElementDto };
