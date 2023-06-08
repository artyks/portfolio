import { User } from '@prisma-clients/authentication-write-model';

type UserWithoutPassword = Omit<User, 'password'>;
type ValidateUserResult =
  | { status: 'SUCCESS'; payload: UserWithoutPassword }
  | { status: 'FAILED'; errorMessage: string };
type RegisterUserResult =
  | { status: 'SUCCESS'; payload: UserWithoutPassword }
  | { status: 'FAILED'; errorMessage: string };
type LoginUserResult = { status: 'SUCCESS'; payload: UserWithoutPassword } | { status: 'FAILED'; errorMessage: string };

export type { UserWithoutPassword, ValidateUserResult, RegisterUserResult, LoginUserResult };
