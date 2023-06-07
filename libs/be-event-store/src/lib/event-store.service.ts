import { Injectable } from '@nestjs/common';

import { EventStoreDBClient } from '@eventstore/db-client';
import { EventStoreConfig } from './config/es-config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
class EventStoreService extends EventStoreDBClient {
  constructor(configService: ConfigService<EventStoreConfig, true>) {
    super(
      {
        endpoint: {
          address: configService.get('BE_PAGES_EVENT_STORE_DB_HOST', { infer: true }),
          port: configService.get('BE_PAGES_EVENT_STORE_DB_PORT', { infer: true }),
        },
      },
      { insecure: true },
    );
  }
}

export { EventStoreService };
