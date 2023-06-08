import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterUserResult, ValidateUserResult } from '@be-authentication/types';
import { RegisterUserDto, ValidateUserDto } from '@be-authentication/dtos';
import { encodePassword, validatePassword } from '@be-authentication/utility';

@Injectable()
class AuthenticationService {
  constructor(private usersService: UsersService) {}

  async validateUser({ email, password: possiblePassword }: ValidateUserDto): Promise<ValidateUserResult> {
    try {
      const user = await this.usersService.findOneByEmail(email);
      if (!user) {
        return { status: 'FAILED', errorMessage: "User with this email doesn't exist" };
      }
      const { password: genuinePasswordHash, ...result } = user;
      if (!validatePassword(possiblePassword, genuinePasswordHash)) {
        return { status: 'FAILED', errorMessage: 'Wrong password' };
      }
      return { status: 'SUCCESS', payload: result };
    } catch (error) {
      return { status: 'FAILED', errorMessage: 'Internal error' };
    }
  }

  async registerUser({ email, password }: RegisterUserDto): Promise<RegisterUserResult> {
    try {
      const user = await this.usersService.findOneByEmail(email);
      if (user) {
        return { status: 'FAILED', errorMessage: 'User with this email already exists' };
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: omittedPassword, ...createdUser } = await this.usersService.create({
        email,
        password: encodePassword(password),
      });
      return { status: 'SUCCESS', payload: createdUser };
    } catch (_) {
      return { status: 'FAILED', errorMessage: 'Internal error' };
    }
  }
}

export { AuthenticationService };
