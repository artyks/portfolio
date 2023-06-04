import { IsUUID } from 'class-validator';

class BaseSetPageElementValueDto {
  @IsUUID()
  elementId: string;
}

export { BaseSetPageElementValueDto };
