import { OmitType } from '@nestjs/mapped-types';
import { PublishPageDto } from './publish-page.dto';

class PublishPageGatewayDto extends OmitType(PublishPageDto, ['userId'] as const) {}

export { PublishPageGatewayDto };
