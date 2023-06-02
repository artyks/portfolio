import { EventStoreConfig } from './es-config.interface';

const loadEsConfig = (): EventStoreConfig => {
  if (!process.env.BE_ESDB_CONN_STRING) {
    throw new Error("Provide 'BE_ESDB_CONN_STRING' env variable");
  }
  return {
    BE_ESDB_CONN_STRING: process.env.BE_ESDB_CONN_STRING,
  };
};

export default loadEsConfig;
