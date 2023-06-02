import { IsNumber, IsUUID } from 'class-validator';

class SetPageNumberElementValueDto {
  @IsUUID()
  pageId: string;

  @IsUUID()
  elementId: string;

  @IsNumber()
  value: number;
}

export { SetPageNumberElementValueDto };
