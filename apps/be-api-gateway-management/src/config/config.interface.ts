type ConfigServer = {
  PORT: number;
  HOST: string;
  GLOBAL_PREFIX: string;
};

type Config = {
  MODE: string;
  SERVER: ConfigServer;
};

export type { Config, ConfigServer };
