import { BaseSetPageElementValueDto } from './base-set-page-element-value.dto';
import { OmitType } from '@nestjs/mapped-types';

class BaseSetPageElementValueGatewayDto extends OmitType(BaseSetPageElementValueDto, ['userId'] as const) {}

export { BaseSetPageElementValueGatewayDto };
