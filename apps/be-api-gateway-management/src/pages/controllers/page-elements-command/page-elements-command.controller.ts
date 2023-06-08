import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  SetPageAssetElementValueDto,
  SetPageDateTimeElementValueDto,
  SetPageMultipleChoiceElementValueDto,
  SetPageNumberElementValueDto,
  SetPageTextElementValueDto,
  SetPageAssetElementValueGatewayDto,
  SetPageDateTimeElementValueGatewayDto,
  SetPageMultipleChoiceElementValueGatewayDto,
  SetPageNumberElementValueGatewayDto,
  SetPageTextElementValueGatewayDto,
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
import { UserWithoutPassword } from '@be-authentication/types';
import { User } from '@be-authentication/decorators';

@Controller(ENDPOINT_PAGE_ELEMENTS_SLUG)
class PageElementsCommandController {
  constructor(@Inject(PAGES_CLIENT_NAME) private readonly pagesClient: ClientProxy) {}

  @Post(SET_PAGE_TEXT_ELEMENT_VALUE_SLUG)
  setTextElementValue(@Body() payload: SetPageTextElementValueGatewayDto, @User() { id }: UserWithoutPassword) {
    this.pagesClient.emit<unknown, SetPageTextElementValueDto>(SET_PAGE_TEXT_ELEMENT_VALUE_EVENT, {
      ...payload,
      userId: id,
    });
  }

  @Post(SET_PAGE_NUMBER_ELEMENT_VALUE_SLUG)
  setNumberElementValue(@Body() payload: SetPageNumberElementValueGatewayDto, @User() { id }: UserWithoutPassword) {
    this.pagesClient.emit<unknown, SetPageNumberElementValueDto>(SET_PAGE_NUMBER_ELEMENT_VALUE_EVENT, {
      ...payload,
      userId: id,
    });
  }

  @Post(SET_PAGE_ASSET_ELEMENT_VALUE_SLUG)
  setAssetElementValue(@Body() payload: SetPageAssetElementValueGatewayDto, @User() { id }: UserWithoutPassword) {
    this.pagesClient.emit<unknown, SetPageAssetElementValueDto>(SET_PAGE_ASSET_ELEMENT_VALUE_EVENT, {
      ...payload,
      userId: id,
    });
  }

  @Post(SET_PAGE_DATE_TIME_ELEMENT_VALUE_SLUG)
  setDateTimeElementValue(@Body() payload: SetPageDateTimeElementValueGatewayDto, @User() { id }: UserWithoutPassword) {
    this.pagesClient.emit<unknown, SetPageDateTimeElementValueDto>(SET_PAGE_DATE_TIME_ELEMENT_VALUE_EVENT, {
      ...payload,
      userId: id,
    });
  }

  @Post(SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SLUG)
  setMultipleChoiceElementValue(
    @Body() payload: SetPageMultipleChoiceElementValueGatewayDto,
    @User() { id }: UserWithoutPassword,
  ) {
    this.pagesClient.emit<unknown, SetPageMultipleChoiceElementValueDto>(SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_EVENT, {
      ...payload,
      userId: id,
    });
  }
}

export { PageElementsCommandController };
