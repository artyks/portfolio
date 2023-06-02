import { Module, Global, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import loadEsConfig from './config/es-config';
import { EventStoreConfig } from './config/es-config.interface';
import { EventStoreClient } from './event-store-client';

const EventStore: Provider = {
  inject: [ConfigService],
  provide: EventStoreClient,
  useFactory: (configService: ConfigService<EventStoreConfig, true>) => {
    return EventStoreClient.connectionString(configService.get('BE_ESDB_CONN_STRING', { infer: true }));
  },
};

@Global()
@Module({
  imports: [ConfigModule.forRoot({ load: [loadEsConfig] })],
  providers: [EventStore],
  exports: [EventStore],
})
class EventStoreModule {}

export { EventStoreModule };
