import { IsString, IsUUID } from 'class-validator';

class SetPageTextElementValueDto {
  @IsUUID()
  pageId: string;

  @IsUUID()
  elementId: string;

  @IsString()
  value: string;
}

export { SetPageTextElementValueDto };
