import { ReplaceTemplateDto } from './replace-template.dto';
import { OmitType } from '@nestjs/mapped-types';

class ReplaceTemplateGatewayDto extends OmitType(ReplaceTemplateDto, ['userId'] as const) {}

export { ReplaceTemplateGatewayDto };
