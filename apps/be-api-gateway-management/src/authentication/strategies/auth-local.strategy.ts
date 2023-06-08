import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AUTHENTICATION_CLIENT_NAME } from '@be-authentication/utility';
import { firstValueFrom } from 'rxjs';
import { ValidateUserResult } from '@be-authentication/types';
import { VALIDATE_USER_MESSAGE } from '@be-authentication/constants';
import { User } from '@prisma-clients/authentication-write-model';
import { isEmail, isNotEmpty, isString } from 'class-validator';

@Injectable()
class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(AUTHENTICATION_CLIENT_NAME) private readonly authClient: ClientProxy) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string, done: CallableFunction): Promise<Omit<User, 'password'>> {
    /**
     * Prevalidate email and password (validation pipe haven't triggered yet)
     */
    if (!isEmail(email) || !isString(password) || !isNotEmpty(password)) {
      return done(new UnauthorizedException('Wrong email or password'));
    }

    const validateUserQuery$ = this.authClient.send<ValidateUserResult>(VALIDATE_USER_MESSAGE, { email, password });
    const result = await firstValueFrom(validateUserQuery$);
    if (result.status === 'FAILED') {
      return done(new UnauthorizedException(result.errorMessage));
    }
    return result.payload;
  }
}

export { LocalStrategy };
