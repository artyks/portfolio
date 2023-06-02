import { IsUUID } from 'class-validator';

class UnpublishPageDto {
  @IsUUID()
  id: string;
}

export { UnpublishPageDto };
