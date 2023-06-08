import { SetPageMultipleChoiceElementValueDto } from './set-page-multile-choice-element-value.dto';
import { OmitType } from '@nestjs/mapped-types';

class SetPageMultipleChoiceElementValueGatewayDto extends OmitType(SetPageMultipleChoiceElementValueDto, [
  'userId',
] as const) {}

export { SetPageMultipleChoiceElementValueGatewayDto };
