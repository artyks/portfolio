import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { Prisma } from '@prisma-clients/authentication-write-model';

@Injectable()
class AuthenticationService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<Prisma.Use> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}

export { AuthenticationService };
