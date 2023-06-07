import { QueueConfig } from './queue-config.interface';

const loadQueueConfig = (): QueueConfig => {
  if (!process.env.BE_REDIS_PORT) {
    throw new Error("Provide 'BE_REDIS_PORT' env variable");
  }
  if (!process.env.BE_REDIS_HOST) {
    throw new Error("Provide 'BE_REDIS_HOST' env variable");
  }
  return {
    QUEUE_PORT: parseInt(process.env.BE_REDIS_PORT, 10),
    QUEUE_HOST: process.env.BE_REDIS_HOST,
  };
};

export { loadQueueConfig };
