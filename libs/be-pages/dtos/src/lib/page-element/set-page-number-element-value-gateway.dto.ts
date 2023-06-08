import { OmitType } from '@nestjs/mapped-types';
import { SetPageNumberElementValueDto } from './set-page-number-element-value.dto';

class SetPageNumberElementValueGatewayDto extends OmitType(SetPageNumberElementValueDto, ['userId'] as const) {}

export { SetPageNumberElementValueGatewayDto };
