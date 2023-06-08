import { OmitType } from '@nestjs/mapped-types';
import { UnpublishPageDto } from './unpublish-page.dto';

class UnpublishPageGatewayDto extends OmitType(UnpublishPageDto, ['userId'] as const) {}

export { UnpublishPageGatewayDto };
