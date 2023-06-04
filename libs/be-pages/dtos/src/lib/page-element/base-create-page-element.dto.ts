import { TemplateElementType } from '@be-templates/constants';
import { IsEnum, IsUUID } from 'class-validator';

const PAGE_ELEMENT_DESCRIMINATOR_PROPERTY = 'type';

class BaseCreatePageElementDto {
  @IsUUID()
  templateElementId: string;

  @IsUUID()
  pageId: string;

  @IsEnum(TemplateElementType)
  [PAGE_ELEMENT_DESCRIMINATOR_PROPERTY]: TemplateElementType;
}

export { BaseCreatePageElementDto, PAGE_ELEMENT_DESCRIMINATOR_PROPERTY };
