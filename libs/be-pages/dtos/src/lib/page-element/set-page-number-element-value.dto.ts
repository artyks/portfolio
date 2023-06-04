import { IsNumber, IsOptional } from 'class-validator';
import { BaseSetPageElementValueDto } from './base-set-page-element-value.dto';

class SetPageNumberElementValueDto extends BaseSetPageElementValueDto {
  @IsOptional()
  @IsNumber()
  value?: number | null;
}

export { SetPageNumberElementValueDto };
