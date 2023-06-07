import { Controller, Logger } from '@nestjs/common';

import { EventPattern, Payload } from '@nestjs/microservices';

import { PAGE_ARCHIVED_EVENT_GLOBAL } from '@be-pages/constants';
import { ArchivePageDto } from '@be-pages/dtos';

@Controller()
class NotificationsController {
  @EventPattern(PAGE_ARCHIVED_EVENT_GLOBAL)
  async handleGlobalPageArchived(@Payload() payload: ArchivePageDto) {
    Logger.log('WORKS');
    console.log({ payload });
  }
}

export { NotificationsController };
