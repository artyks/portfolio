import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class ValidateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export { ValidateUserDto };
