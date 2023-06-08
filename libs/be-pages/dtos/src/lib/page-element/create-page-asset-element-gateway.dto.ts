import { CreatePageAssetElementDto } from './create-page-asset-element.dto';
import { OmitType } from '@nestjs/mapped-types';

class CreatePageAssetElementGatewayDto extends OmitType(CreatePageAssetElementDto, ['userId'] as const) {}

export { CreatePageAssetElementGatewayDto };
