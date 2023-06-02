import { IsUUID } from 'class-validator';

class FindOneTemplateParams {
  @IsUUID()
  id: string;
}

export { FindOneTemplateParams };
