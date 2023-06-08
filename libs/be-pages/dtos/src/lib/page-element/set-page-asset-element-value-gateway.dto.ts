import { OmitType } from '@nestjs/mapped-types';
import { SetPageAssetElementValueDto } from './set-page-asset-element-value.dto';

class SetPageAssetElementValueGatewayDto extends OmitType(SetPageAssetElementValueDto, ['userId'] as const) {}

export { SetPageAssetElementValueGatewayDto };
