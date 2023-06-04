import { IsArray, IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import {
  BaseCreatePageElementDto,
  CreatePageAssetElementDto,
  CreatePageDateTimeElementDto,
  CreatePageMultipleChoiceElementDto,
  CreatePageNumberElementDto,
  CreatePageTextElementDto,
  PAGE_ELEMENT_DESCRIMINATOR_PROPERTY,
} from '../page-element';
import { Type } from 'class-transformer';
import { TemplateElementType } from '@be-templates/constants';

type CreatePageElementDtoType =
  | CreatePageTextElementDto
  | CreatePageAssetElementDto
  | CreatePageDateTimeElementDto
  | CreatePageMultipleChoiceElementDto
  | CreatePageNumberElementDto;

class CreatePageDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  codename: string;

  @IsUUID()
  templateId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BaseCreatePageElementDto, {
    keepDiscriminatorProperty: true,
    discriminator: {
      property: PAGE_ELEMENT_DESCRIMINATOR_PROPERTY,
      subTypes: [
        { value: CreatePageTextElementDto, name: TemplateElementType.TEXT },
        { value: CreatePageAssetElementDto, name: TemplateElementType.ASSET },
        { value: CreatePageDateTimeElementDto, name: TemplateElementType.DATE_TIME },
        { value: CreatePageMultipleChoiceElementDto, name: TemplateElementType.MULTIPLE_CHOICE },
        { value: CreatePageNumberElementDto, name: TemplateElementType.NUMBER },
      ],
    },
  })
  elements: CreatePageElementDtoType[];
}

export { CreatePageDto };

export type { CreatePageElementDtoType };
