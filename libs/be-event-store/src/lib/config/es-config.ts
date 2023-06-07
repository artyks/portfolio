import { EventStoreConfig } from './es-config.interface';

const loadEsConfig = (): EventStoreConfig => {
  if (!process.env.BE_PAGES_EVENT_STORE_DB_HOST) {
    throw new Error("Provide 'BE_PAGES_EVENT_STORE_DB_HOST' env variable");
  }
  if (!process.env.BE_PAGES_EVENT_STORE_DB_PORT) {
    throw new Error("Provide 'BE_PAGES_EVENT_STORE_DB_PORT' env variable");
  }
  return {
    BE_PAGES_EVENT_STORE_DB_HOST: process.env.BE_PAGES_EVENT_STORE_DB_HOST,
    BE_PAGES_EVENT_STORE_DB_PORT: parseInt(process.env.BE_PAGES_EVENT_STORE_DB_PORT),
  };
};

export default loadEsConfig;
