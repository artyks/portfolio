import { Controller } from '@nestjs/common';
import { NotificationsService } from '../notifications.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import {
  PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
  PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_GLOBAL,
} from '@be-pages/constants';
import {
  EsSetPageAssetElementValueDto,
  EsSetPageDateTimeElementValueDto,
  EsSetPageMultipleChoiceElementValueDto,
  EsSetPageNumberElementValueDto,
  EsSetPageTextElementValueDto,
} from '@be-pages/types';

@Controller()
class InternalPageElementsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @EventPattern(PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_GLOBAL)
  handlePageAssetElementValueSetted(@Payload() { userId, requestId, ...payload }: EsSetPageAssetElementValueDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: PAGE_ASSET_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_GLOBAL)
  handlePageDateTimeElementValueSetted(@Payload() { userId, requestId, ...payload }: EsSetPageDateTimeElementValueDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: PAGE_DATE_TIME_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_GLOBAL)
  handlePageMultipleChoiceElementValueSetted(
    @Payload() { userId, requestId, ...payload }: EsSetPageMultipleChoiceElementValueDto,
  ) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: PAGE_MULTIPLE_CHOICE_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_GLOBAL)
  handlePageNumberElementValueSetted(@Payload() { userId, requestId, ...payload }: EsSetPageNumberElementValueDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: PAGE_NUMBER_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_GLOBAL)
  handlePageTextElementValueSetted(@Payload() { userId, requestId, ...payload }: EsSetPageTextElementValueDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: PAGE_TEXT_ELEMENT_VALUE_SETTED_EVENT_GLOBAL, requestId },
    });
  }
}

export { InternalPageElementsController };
