import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import loadEsConfig from './config/es-config';
import { EventStoreService } from './event-store.service';

@Global()
@Module({
  imports: [ConfigModule.forFeature(loadEsConfig)],
  providers: [EventStoreService],
  exports: [EventStoreService, ConfigModule],
})
class EventStoreModule {}

export { EventStoreModule };
