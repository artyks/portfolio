import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

class CreatePageDraftDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  codename: string;

  @IsUUID()
  templateId: string;
}

export { CreatePageDraftDto };
