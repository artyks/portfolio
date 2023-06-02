import { Controller } from '@nestjs/common';
import {
  SetPageAssetElementValueDto,
  SetPageDateTimeElementValueDto,
  SetPageMultipleChoiceElementValueDto,
  SetPageNumberElementValueDto,
  SetPageTextElementValueDto,
} from '@be-pages/dtos';
import {
  SET_PAGE_ASSET_ELEMENT_VALUE_EVENT,
  SET_PAGE_DATE_TIME_ELEMENT_VALUE_EVENT,
  SET_PAGE_TEXT_ELEMENT_VALUE_EVENT,
  SET_PAGE_NUMBER_ELEMENT_VALUE_EVENT,
  SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_EVENT,
} from '@be-pages/constants';

import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
class PageElementsCommandController {
  @EventPattern(SET_PAGE_TEXT_ELEMENT_VALUE_EVENT)
  handleSetTextElementValue(@Payload() payload: SetPageTextElementValueDto) {
    return;
  }

  @EventPattern(SET_PAGE_NUMBER_ELEMENT_VALUE_EVENT)
  handleSetNumberElementValue(@Payload() payload: SetPageNumberElementValueDto) {
    return;
  }

  @EventPattern(SET_PAGE_ASSET_ELEMENT_VALUE_EVENT)
  handleSetAssetElementValue(@Payload() payload: SetPageAssetElementValueDto) {
    return;
  }

  @EventPattern(SET_PAGE_DATE_TIME_ELEMENT_VALUE_EVENT)
  handleSetDateTimeElementValue(@Payload() payload: SetPageDateTimeElementValueDto) {
    return;
  }

  @EventPattern(SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_EVENT)
  handleSetMultipleChoiceElementValue(@Payload() payload: SetPageMultipleChoiceElementValueDto) {
    return;
  }
}

export { PageElementsCommandController };
