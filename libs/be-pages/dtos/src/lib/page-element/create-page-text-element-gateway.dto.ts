import { CreatePageTextElementDto } from './create-page-text-element.dto';
import { OmitType } from '@nestjs/mapped-types';

class CreatePageTextElementGatewayDto extends OmitType(CreatePageTextElementDto, ['userId'] as const) {}

export { CreatePageTextElementGatewayDto };
