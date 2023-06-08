import { Controller } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterUserDto, ValidateUserDto } from '@be-authentication/dtos';
import { REGISTER_USER_MESSAGE, VALIDATE_USER_MESSAGE } from '@be-authentication/constants';

@Controller()
class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @MessagePattern(VALIDATE_USER_MESSAGE)
  async validateUser(@Payload() payload: ValidateUserDto) {
    return await this.authService.validateUser(payload);
  }

  @MessagePattern(REGISTER_USER_MESSAGE)
  async registerUser(@Payload() payload: RegisterUserDto) {
    return await this.authService.registerUser(payload);
  }
}

export { AuthenticationController };
