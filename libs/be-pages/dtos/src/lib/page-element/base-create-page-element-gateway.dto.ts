import { OmitType } from '@nestjs/mapped-types';
import { BaseCreatePageElementDto } from './base-create-page-element.dto';

class BaseCreatePageElementGatewayDto extends OmitType(BaseCreatePageElementDto, ['userId'] as const) {}

export { BaseCreatePageElementGatewayDto };
