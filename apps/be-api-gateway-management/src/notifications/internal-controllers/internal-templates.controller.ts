import { Controller } from '@nestjs/common';
import { NotificationsService } from '../notifications.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import {
  TEMPLATE_ARCHIVED_EVENT_GLOBAL,
  TEMPLATE_CREATED_EVENT_GLOBAL,
  TEMPLATE_PUBLISHED_EVENT_GLOBAL,
  TEMPLATE_REPLACED_EVENT_GLOBAL,
} from '@be-templates/constants';
import { ArchiveTemplateDto, CreateTemplateDto, PublishTemplateDto, ReplaceTemplateDto } from '@be-templates/dtos';

@Controller()
class InternalTemplatesController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @EventPattern(TEMPLATE_ARCHIVED_EVENT_GLOBAL)
  handleTemplateArchived(@Payload() { userId, requestId, ...payload }: ArchiveTemplateDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: TEMPLATE_ARCHIVED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(TEMPLATE_CREATED_EVENT_GLOBAL)
  handleTemplateCreated(@Payload() { userId, requestId, ...payload }: CreateTemplateDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: TEMPLATE_CREATED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(TEMPLATE_PUBLISHED_EVENT_GLOBAL)
  handleTemplatePublished(@Payload() { userId, requestId, ...payload }: PublishTemplateDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: TEMPLATE_PUBLISHED_EVENT_GLOBAL, requestId },
    });
  }

  @EventPattern(TEMPLATE_REPLACED_EVENT_GLOBAL)
  handleTemplateReplaced(@Payload() { userId, requestId, ...payload }: ReplaceTemplateDto) {
    this.notificationsService.notify(userId, {
      ...payload,
      metadata: { eventName: TEMPLATE_REPLACED_EVENT_GLOBAL, requestId },
    });
  }
}

export { InternalTemplatesController };
