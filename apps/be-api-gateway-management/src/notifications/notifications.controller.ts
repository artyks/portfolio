import { Controller, Param, Sse } from '@nestjs/common';
import { ENDPOINT_NOTIFICATIONS_SLUG } from '@notifications/constants';
import { NotificationsService } from './notifications.service';

@Controller(ENDPOINT_NOTIFICATIONS_SLUG)
class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Sse(':userId')
  subscribeToNotifications(@Param('userId') userId: string) {
    return this.notificationsService.handleConnection(userId);
  }
}

export { NotificationsController };
