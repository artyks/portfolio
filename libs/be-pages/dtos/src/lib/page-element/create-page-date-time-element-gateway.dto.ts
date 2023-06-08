import { OmitType } from '@nestjs/mapped-types';
import { CreatePageDateTimeElementDto } from './create-page-date-time-element.dto';

class CreatePageDateTimeElementGatewayDto extends OmitType(CreatePageDateTimeElementDto, ['userId'] as const) {}

export { CreatePageDateTimeElementGatewayDto };
