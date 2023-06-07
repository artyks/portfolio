import { logError } from '@common/utility';
import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';

@Catch(RpcException)
class LogRpcExceptionsFilter extends BaseRpcExceptionFilter {
  override catch(exception: RpcException, host: ArgumentsHost) {
    logError(exception.getError());
    return super.catch(exception, host);
  }
}

export { LogRpcExceptionsFilter };
