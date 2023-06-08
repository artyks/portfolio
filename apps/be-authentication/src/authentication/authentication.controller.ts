import { Controller, Get } from '@nestjs/common';

import { AuthenticationService } from './authentication.service';

@Controller()
class AuthenticationController {
  constructor(private readonly appService: AuthenticationService) {}

  @Get()
  getData() {
    // return this.appService.getData();
  }
}

export { AuthenticationController };
