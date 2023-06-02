import { Body, Controller, Post } from '@nestjs/common';
import {
  SetPageAssetElementValueDto,
  SetPageDateTimeElementValueDto,
  SetPageMultipleChoiceElementValueDto,
  SetPageNumberElementValueDto,
  SetPageTextElementValueDto,
} from '@be-pages/dtos';

import {
  SET_PAGE_ASSET_ELEMENT_VALUE_SLUG,
  SET_PAGE_DATE_TIME_ELEMENT_VALUE_SLUG,
  SET_PAGE_TEXT_ELEMENT_VALUE_SLUG,
  SET_PAGE_NUMBER_ELEMENT_VALUE_SLUG,
  SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SLUG,
  ENDPOINT_PAGE_ELEMENTS_SLUG,
} from '../../constants/page-elements.constants';

@Controller(ENDPOINT_PAGE_ELEMENTS_SLUG)
class PageElementsCommandController {
  @Post(SET_PAGE_TEXT_ELEMENT_VALUE_SLUG)
  setTextElementValue(@Body() payload: SetPageTextElementValueDto) {
    return;
  }

  @Post(SET_PAGE_NUMBER_ELEMENT_VALUE_SLUG)
  setNumberElementValue(@Body() payload: SetPageNumberElementValueDto) {
    return;
  }

  @Post(SET_PAGE_ASSET_ELEMENT_VALUE_SLUG)
  setAssetElementValue(@Body() payload: SetPageAssetElementValueDto) {
    return;
  }

  @Post(SET_PAGE_DATE_TIME_ELEMENT_VALUE_SLUG)
  setDateTimeElementValue(@Body() payload: SetPageDateTimeElementValueDto) {
    return;
  }

  @Post(SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SLUG)
  setMultipleChoiceElementValue(@Body() payload: SetPageMultipleChoiceElementValueDto) {
    return;
  }
}

export { PageElementsCommandController };
