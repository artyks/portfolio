import { OmitType } from '@nestjs/mapped-types';
import { SetPageDateTimeElementValueDto } from './set-page-date-time-element-value.dto';

class SetPageDateTimeElementValueGatewayDto extends OmitType(SetPageDateTimeElementValueDto, ['userId'] as const) {}

export { SetPageDateTimeElementValueGatewayDto };
