import { EventStoreConfig } from './es-config.interface';

const loadEsConfig = (): EventStoreConfig => {
  if (!process.env.BE_PAGES_EVENT_STORE_DB_URL) {
    throw new Error("Provide 'BE_PAGES_EVENT_STORE_DB_URL' env variable");
  }
  return {
    BE_ESDB_CONN_STRING: process.env.BE_PAGES_EVENT_STORE_DB_URL,
  };
};

export default loadEsConfig;
