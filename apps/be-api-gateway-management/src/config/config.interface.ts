type ConfigServer = {
  PORT: number;
  HOST: string;
  GLOBAL_PREFIX: string;
};

type Config = {
  MODE: 'development' | 'production';
  SERVER: ConfigServer;
  SESSION_SECRET: string;
};

export type { Config, ConfigServer };
