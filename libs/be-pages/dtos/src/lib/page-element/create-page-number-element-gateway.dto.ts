import { OmitType } from '@nestjs/mapped-types';
import { CreatePageNumberElementDto } from './create-page-number-element.dto';

class CreatePageNumberElementGatewayDto extends OmitType(CreatePageNumberElementDto, ['userId'] as const) {}

export { CreatePageNumberElementGatewayDto };
