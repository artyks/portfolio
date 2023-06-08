import { SetPageTextElementValueDto } from './set-page-text-element-value.dto';
import { OmitType } from '@nestjs/mapped-types';

class SetPageTextElementValueGatewayDto extends OmitType(SetPageTextElementValueDto, ['userId'] as const) {}

export { SetPageTextElementValueGatewayDto };
