import { OmitType } from '@nestjs/mapped-types';
import { CreatePageDto } from './create-page.dto';

class CreatePageGatewayDto extends OmitType(CreatePageDto, ['userId'] as const) {}

export { CreatePageGatewayDto };
