import { MessageEvent } from '@nestjs/common';
type UserId = string;
type MessageEventData = { [key: string]: unknown; eventName: string; requestId?: string };
type NotificationsMessageEvent = Omit<MessageEvent, 'data'> & { data: MessageEventData };

export type { UserId, MessageEventData, NotificationsMessageEvent };
