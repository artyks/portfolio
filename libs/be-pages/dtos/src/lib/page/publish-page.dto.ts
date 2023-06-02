import { IsUUID } from 'class-validator';

class PublishPageDto {
  @IsUUID()
  id: string;
}

export { PublishPageDto };
