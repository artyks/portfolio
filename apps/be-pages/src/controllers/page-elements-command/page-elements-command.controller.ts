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
import { CommandBus } from '@nestjs/cqrs';
import { SetPageTextElementValueCommand } from '../../commands/implementations/page-elements/set-page-text-element-value.command';
import { SetPageNumberElementValueCommand } from '../../commands/implementations/page-elements/set-page-number-element-value.command';
import { SetPageAssetElementValueCommand } from '../../commands/implementations/page-elements/set-page-asset-element-value.command';
import { SetPageDateTimeElementValueCommand } from '../../commands/implementations/page-elements/set-page-date-time-element-value.command';
import { SetPageMultipleChoiceElementValueCommand } from '../../commands/implementations/page-elements/set-page-multiple-choice-element-value.command';

@Controller()
class PageElementsCommandController {
  constructor(private readonly commandBus: CommandBus) {}

  @EventPattern(SET_PAGE_TEXT_ELEMENT_VALUE_EVENT)
  async handleSetTextElementValue(@Payload() payload: SetPageTextElementValueDto) {
    return this.commandBus.execute(new SetPageTextElementValueCommand(payload));
  }

  @EventPattern(SET_PAGE_NUMBER_ELEMENT_VALUE_EVENT)
  async handleSetNumberElementValue(@Payload() payload: SetPageNumberElementValueDto) {
    return this.commandBus.execute(new SetPageNumberElementValueCommand(payload));
  }

  @EventPattern(SET_PAGE_ASSET_ELEMENT_VALUE_EVENT)
  async handleSetAssetElementValue(@Payload() payload: SetPageAssetElementValueDto) {
    return this.commandBus.execute(new SetPageAssetElementValueCommand(payload));
  }

  @EventPattern(SET_PAGE_DATE_TIME_ELEMENT_VALUE_EVENT)
  async handleSetDateTimeElementValue(@Payload() payload: SetPageDateTimeElementValueDto) {
    return this.commandBus.execute(new SetPageDateTimeElementValueCommand(payload));
  }

  @EventPattern(SET_PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_EVENT)
  async handleSetMultipleChoiceElementValue(@Payload() payload: SetPageMultipleChoiceElementValueDto) {
    return this.commandBus.execute(new SetPageMultipleChoiceElementValueCommand(payload));
  }
}

export { PageElementsCommandController };
