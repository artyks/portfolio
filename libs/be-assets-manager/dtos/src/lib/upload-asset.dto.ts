import { IsUUID, ValidateIf } from 'class-validator';

class UploadAssetDto {
  /**
   * Consider null as a root directory or parent folder absence
   */
  @IsUUID()
  @ValidateIf((_, value) => value !== null)
  folderId: string | null;
}

export { UploadAssetDto };
