import { IsDateString, IsOptional } from 'class-validator';
import { BaseSetPageElementValueDto } from './base-set-page-element-value.dto';

class SetPageDateTimeElementValueDto extends BaseSetPageElementValueDto {
  @IsOptional()
  @IsDateString()
  value?: string | null;
}

export { SetPageDateTimeElementValueDto };
