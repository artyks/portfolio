import { TemplateElementType } from '@be-templates/constants';
import { BaseMetaDto } from '@common/dtos';
import { IsEnum, IsUUID } from 'class-validator';

const PAGE_ELEMENT_DESCRIMINATOR_PROPERTY = 'type';

class BaseCreatePageElementDto extends BaseMetaDto {
  @IsUUID()
  templateElementId: string;

  @IsUUID()
  pageId: string;

  @IsEnum(TemplateElementType)
  [PAGE_ELEMENT_DESCRIMINATOR_PROPERTY]: TemplateElementType;
}

export { BaseCreatePageElementDto, PAGE_ELEMENT_DESCRIMINATOR_PROPERTY };
