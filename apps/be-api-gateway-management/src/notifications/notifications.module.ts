import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { InternalControllers } from './internal-controllers';

@Module({
  controllers: [NotificationsController, ...InternalControllers],
  providers: [NotificationsService],
})
class NotificationsModule {}

export { NotificationsModule };
