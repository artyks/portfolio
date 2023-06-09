import { Controller } from '@nestjs/common';
import { NotificationsService } from '../notifications.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import {
  PAGE_ARCHIVED_EVENT_GLOBAL,
  PAGE_DRAFT_CREATED_EVENT_GLOBAL,
  PAGE_PUBLISHED_EVENT_GLOBAL,
  PAGE_UNPUBLISHED_EVENT_GLOBAL,
} from '@be-pages/constants';
import { EsArchivePageDto, EsCreatePageDto, EsPublishPageDto, EsUnpublishPageDto } from '@be-pages/types';

@Controller()
class InternalPagesController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @EventPattern(PAGE_ARCHIVED_EVENT_GLOBAL)
  handlePageArchived(@Payload() { userId, requestId, ...payload }: EsArchivePageDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: PAGE_ARCHIVED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(PAGE_DRAFT_CREATED_EVENT_GLOBAL)
  handlePageDraftCreated(@Payload() { userId, requestId, ...payload }: EsCreatePageDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: PAGE_DRAFT_CREATED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(PAGE_PUBLISHED_EVENT_GLOBAL)
  handlePagePublished(@Payload() { userId, requestId, ...payload }: EsPublishPageDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: PAGE_PUBLISHED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(PAGE_UNPUBLISHED_EVENT_GLOBAL)
  handlePageUnpublished(@Payload() { userId, requestId, ...payload }: EsUnpublishPageDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: PAGE_UNPUBLISHED_EVENT_GLOBAL, requestId },
    });
  }
}

export { InternalPagesController };
