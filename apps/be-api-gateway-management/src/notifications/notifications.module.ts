import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { InternalAssetsManagerController } from './internal-controllers/internal-assets-manager.controller';

@Module({
  controllers: [NotificationsController, InternalAssetsManagerController],
  providers: [NotificationsService],
})
class NotificationsModule {}

export { NotificationsModule };
