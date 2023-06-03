import { Body, Controller, Inject, Post } from '@nestjs/common';
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
import { PAGES_CLIENT_NAME } from '@be-pages/utility';
import { ClientProxy } from '@nestjs/microservices';
import {
  SET_PAGE_ASSET_ELEMENT_VALUE_EVENT,
  SET_PAGE_DATE_TIME_ELEMENT_VALUE_EVENT,
  SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_EVENT,
  SET_PAGE_NUMBER_ELEMENT_VALUE_EVENT,
  SET_PAGE_TEXT_ELEMENT_VALUE_EVENT,
} from '@be-pages/constants';

@Controller(ENDPOINT_PAGE_ELEMENTS_SLUG)
class PageElementsCommandController {
  constructor(@Inject(PAGES_CLIENT_NAME) private readonly pagesClient: ClientProxy) {}

  @Post(SET_PAGE_TEXT_ELEMENT_VALUE_SLUG)
  setTextElementValue(@Body() payload: SetPageTextElementValueDto) {
    this.pagesClient.emit(SET_PAGE_TEXT_ELEMENT_VALUE_EVENT, payload);
  }

  @Post(SET_PAGE_NUMBER_ELEMENT_VALUE_SLUG)
  setNumberElementValue(@Body() payload: SetPageNumberElementValueDto) {
    this.pagesClient.emit(SET_PAGE_NUMBER_ELEMENT_VALUE_EVENT, payload);
  }

  @Post(SET_PAGE_ASSET_ELEMENT_VALUE_SLUG)
  setAssetElementValue(@Body() payload: SetPageAssetElementValueDto) {
    this.pagesClient.emit(SET_PAGE_ASSET_ELEMENT_VALUE_EVENT, payload);
  }

  @Post(SET_PAGE_DATE_TIME_ELEMENT_VALUE_SLUG)
  setDateTimeElementValue(@Body() payload: SetPageDateTimeElementValueDto) {
    this.pagesClient.emit(SET_PAGE_DATE_TIME_ELEMENT_VALUE_EVENT, payload);
  }

  @Post(SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SLUG)
  setMultipleChoiceElementValue(@Body() payload: SetPageMultipleChoiceElementValueDto) {
    this.pagesClient.emit(SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_EVENT, payload);
  }
}

export { PageElementsCommandController };
