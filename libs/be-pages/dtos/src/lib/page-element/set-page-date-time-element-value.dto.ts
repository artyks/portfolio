import { IsDateString, IsUUID } from 'class-validator';

class SetPageDateTimeElementValueDto {
  @IsUUID()
  pageId: string;

  @IsUUID()
  elementId: string;

  @IsDateString()
  value: string;
}

export { SetPageDateTimeElementValueDto };
