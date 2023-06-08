import { IsOptional, IsUUID } from 'class-validator';

class BaseMetaDto {
  @IsUUID()
  userId: string;

  @IsOptional()
  @IsUUID()
  requestId?: string;
}

export { BaseMetaDto };
