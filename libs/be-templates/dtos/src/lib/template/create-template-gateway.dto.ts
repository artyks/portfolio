import { OmitType } from '@nestjs/mapped-types';
import { CreateTemplateDto } from './create-template.dto';

class CreateTemplateGatewayDto extends OmitType(CreateTemplateDto, ['userId'] as const) {}

export { CreateTemplateGatewayDto };
