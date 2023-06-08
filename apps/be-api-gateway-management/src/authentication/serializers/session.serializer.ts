import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserWithoutPassword } from '@be-authentication/types';
import { AuthPrismaWriteModelClient } from '@prisma-clients/authentication-write-model';

@Injectable()
class SessionSerializer extends PassportSerializer {
  constructor(private readonly authPrismaClient: AuthPrismaWriteModelClient) {
    super();
  }

  serializeUser(user: UserWithoutPassword, done: CallableFunction) {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    // TODO: deligate to auth service
    const user = await this.authPrismaClient.user.findUnique({ where: { id: userId } });
    if (!user) {
      done(null, null);
    }
    done(null, user);
  }
}

export { SessionSerializer };
