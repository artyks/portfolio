import { CreatePageMultipleChoiceElementDto } from './create-page-multiple-choice-element.dto';
import { OmitType } from '@nestjs/mapped-types';

class CreatePageMultipleChoiceElementGatewayDto extends OmitType(CreatePageMultipleChoiceElementDto, [
  'userId',
] as const) {}

export { CreatePageMultipleChoiceElementGatewayDto };
