import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';
import { MessageEventData, NotificationsMessageEvent, UserId } from '@notifications/types';

@Injectable()
class NotificationsService {
  notificationEvents: Record<UserId, Subject<NotificationsMessageEvent>> = {};

  handleConnection(userId: UserId) {
    if (!this.notificationEvents[userId]) {
      this.notificationEvents[userId] = new Subject();
    }
    return this.notificationEvents[userId].asObservable();
  }

  notify<TPayload extends MessageEventData>(userId: UserId, payload: TPayload) {
    this.notificationEvents[userId].next({ data: payload });
  }
}

export { NotificationsService };
