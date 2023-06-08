import { ArchiveTemplateDto } from './archive-template.dto';
import { OmitType } from '@nestjs/mapped-types';

class ArchiveTemplateGatewayDto extends OmitType(ArchiveTemplateDto, ['userId'] as const) {}

export { ArchiveTemplateGatewayDto };
