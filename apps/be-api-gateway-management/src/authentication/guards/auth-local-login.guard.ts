import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { firstValueFrom, isObservable } from 'rxjs';

@Injectable()
class LocalAuthLoginGuard extends AuthGuard('local') {
  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext) {
    /**
     * Get actual result of user validation
     */
    let can = await super.canActivate(context);
    if (isObservable(can)) {
      can = await firstValueFrom(can);
    }

    /**
     * Start session
     */
    if (can) {
      const request = context.switchToHttp().getRequest();
      await super.logIn(request);
      return true;
    }

    return can;
  }
}

export { LocalAuthLoginGuard };
