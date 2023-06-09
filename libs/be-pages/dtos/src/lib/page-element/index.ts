import { SetPageAssetElementValueDto } from './set-page-asset-element-value.dto';
import { SetPageDateTimeElementValueDto } from './set-page-date-time-element-value.dto';
import { SetPageMultipleChoiceElementValueDto } from './set-page-multile-choice-element-value.dto';
import { SetPageNumberElementValueDto } from './set-page-number-element-value.dto';
import { SetPageTextElementValueDto } from './set-page-text-element-value.dto';

export * from './set-page-text-element-value.dto';
export * from './set-page-asset-element-value.dto';
export * from './set-page-date-time-element-value.dto';
export * from './set-page-multile-choice-element-value.dto';
export * from './set-page-number-element-value.dto';

export * from './set-page-text-element-value-gateway.dto';
export * from './set-page-asset-element-value-gateway.dto';
export * from './set-page-date-time-element-value-gateway.dto';
export * from './set-page-multile-choice-element-value-gateway.dto';
export * from './set-page-number-element-value-gateway.dto';

export * from './base-create-page-element.dto';
export * from './create-page-asset-element.dto';
export * from './create-page-date-time-element.dto';
export * from './create-page-multiple-choice-element.dto';
export * from './create-page-number-element.dto';
export * from './create-page-text-element.dto';

export * from './base-create-page-element-gateway.dto';
export * from './create-page-asset-element-gateway.dto';
export * from './create-page-date-time-element-gateway.dto';
export * from './create-page-multiple-choice-element-gateway.dto';
export * from './create-page-number-element-gateway.dto';
export * from './create-page-text-element-gateway.dto';

type SetPageElementDtoType =
  | SetPageTextElementValueDto
  | SetPageAssetElementValueDto
  | SetPageDateTimeElementValueDto
  | SetPageMultipleChoiceElementValueDto
  | SetPageNumberElementValueDto;

export { SetPageElementDtoType };
