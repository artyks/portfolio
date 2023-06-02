import { IsUUID } from 'class-validator';

class ArchiveAssetDto {
  @IsUUID()
  id: string;
}

export { ArchiveAssetDto };
