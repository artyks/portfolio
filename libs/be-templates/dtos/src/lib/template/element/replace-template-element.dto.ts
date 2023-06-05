import { OmitType } from '@nestjs/mapped-types';
import { CreateTemplateElementDto } from './create-template-element.dto';

class ReplaceTemplateElementDto extends OmitType(CreateTemplateElementDto, ['type'] as const) {}

export { ReplaceTemplateElementDto };
