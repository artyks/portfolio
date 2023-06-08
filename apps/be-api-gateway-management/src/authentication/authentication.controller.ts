import {
  ENDPOINT_SLUG,
  LOGIN_USER_SLUG,
  REGISTER_USER_MESSAGE,
  REGISTER_USER_SLUG,
} from '@be-authentication/constants';
import { RegisterUserDto } from '@be-authentication/dtos';
import { GatewayRegisterUserResult, RegisterUserResult } from '@be-authentication/types';
import { AUTHENTICATION_CLIENT_NAME } from '@be-authentication/utility';
import { BadRequestException, Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { LocalAuthLoginGuard } from './guards/auth-local-login.guard';
import { Public } from '@be-authentication/decorators';

@Controller(ENDPOINT_SLUG)
class AuthenticationController {
  constructor(@Inject(AUTHENTICATION_CLIENT_NAME) private readonly authClient: ClientProxy) {}

  @Public()
  @Post(REGISTER_USER_SLUG)
  async registerUser(@Body() payload: RegisterUserDto): Promise<GatewayRegisterUserResult> {
    const registerResult$ = this.authClient.send<RegisterUserResult>(REGISTER_USER_MESSAGE, payload);
    const res = await firstValueFrom(registerResult$);
    if (res.status === 'FAILED') {
      throw new BadRequestException(res.errorMessage);
    }
    return res.payload;
  }

  @Public()
  @UseGuards(LocalAuthLoginGuard)
  @Post(LOGIN_USER_SLUG)
  async loginUser() {
    return { status: 'SUCCESS' };
  }
}

export { AuthenticationController };
