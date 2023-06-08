import { IS_PUBLIC_KEY } from '@be-authentication/decorators';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
class AuthenticatedGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    /**
     * Allow access for controllers decoreted with Public
     */
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    /**
     * Allow access for authenticated requests
     */
    const req = context.switchToHttp().getRequest<Request>();
    return req.isAuthenticated();
  }
}

export { AuthenticatedGuard };
