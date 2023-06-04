import { IsArray, IsOptional, IsString } from 'class-validator';
import { BaseSetPageElementValueDto } from './base-set-page-element-value.dto';

class SetPageMultipleChoiceElementValueDto extends BaseSetPageElementValueDto {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  value?: string[] | null;
}

export { SetPageMultipleChoiceElementValueDto };
