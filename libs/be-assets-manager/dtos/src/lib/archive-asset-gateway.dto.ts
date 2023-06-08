import { OmitType } from '@nestjs/mapped-types';
import { ArchiveAssetDto } from './archive-asset.dto';

class ArchiveAssetGatewayDto extends OmitType(ArchiveAssetDto, ['userId'] as const) {}

export { ArchiveAssetGatewayDto };
