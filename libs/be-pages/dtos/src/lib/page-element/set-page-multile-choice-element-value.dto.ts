import { ArrayNotEmpty, IsArray, IsString, IsUUID } from 'class-validator';

class SetPageMultipleChoiceElementValueDto {
  @IsUUID()
  pageId: string;

  @IsUUID()
  elementId: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  value: string[];
}

export { SetPageMultipleChoiceElementValueDto };
