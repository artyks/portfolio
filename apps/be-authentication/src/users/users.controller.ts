import { Controller } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller()
class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // getData() {
  //   return this.usersService.getData();
  // }
}

export { UsersController };
