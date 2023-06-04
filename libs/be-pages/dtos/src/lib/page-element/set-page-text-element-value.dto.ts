import { IsString } from 'class-validator';
import { BaseSetPageElementValueDto } from './base-set-page-element-value.dto';

class SetPageTextElementValueDto extends BaseSetPageElementValueDto {
  @IsString()
  value: string;
}

export { SetPageTextElementValueDto };
