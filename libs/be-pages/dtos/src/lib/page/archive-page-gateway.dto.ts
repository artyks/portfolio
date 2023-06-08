import { OmitType } from '@nestjs/mapped-types';
import { ArchivePageDto } from './archive-page.dto';

class ArchivePageGatewayDto extends OmitType(ArchivePageDto, ['userId'] as const) {}

export { ArchivePageGatewayDto };
