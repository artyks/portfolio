import { UserWithoutPassword } from './authentication.types';

type GatewayRegisterUserResult = UserWithoutPassword;
type GatewayLoginUserResult = UserWithoutPassword;

export type { GatewayRegisterUserResult, GatewayLoginUserResult };
