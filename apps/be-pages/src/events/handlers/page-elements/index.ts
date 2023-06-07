import { PageAssetElementValueSettedHandler } from './page-asset-element-value-setted.handler';
import { PageDateTimeElementValueSettedHandler } from './page-date-time-element-value-setted.handler';
import { PageMultipleChoiceElementValueSettedHandler } from './page-multiple-choice-element-value-setted.handler';
import { PageNumberElementValueSettedHandler } from './page-number-element-value-setted.handler';
import { PageTextElementValueSettedHandler } from './page-text-element-value-setted.handler';

const PageElementsEventHandlers = [
  PageAssetElementValueSettedHandler,
  PageDateTimeElementValueSettedHandler,
  PageMultipleChoiceElementValueSettedHandler,
  PageNumberElementValueSettedHandler,
  PageTextElementValueSettedHandler,
];

export { PageElementsEventHandlers };
