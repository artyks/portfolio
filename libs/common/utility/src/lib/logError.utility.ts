import { Logger } from '@nestjs/common';

const logError = (error: unknown) => {
  console.trace(error);
  if (typeof error === 'object' && error !== null && 'message' in error) {
    Logger.error(error.message);
  } else {
    Logger.error(error);
  }
};

export { logError };
