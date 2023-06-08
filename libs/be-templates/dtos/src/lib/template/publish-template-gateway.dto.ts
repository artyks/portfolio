import { PublishTemplateDto } from './publish-template.dto';
import { OmitType } from '@nestjs/mapped-types';

class PublishTemplateGatewayDto extends OmitType(PublishTemplateDto, ['userId'] as const) {}

export { PublishTemplateGatewayDto };
