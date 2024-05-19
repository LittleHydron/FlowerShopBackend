import { IAuthService } from '@interfaces/services/IAuthService';

import { IUsersService } from '@interfaces/services/IUsersService';

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements IAuthService{
  constructor(
    @Inject(IUsersService)
    private usersService: IUsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ accessToken: string }> {
    const user = await this.usersService.findOneByUsername(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userId, username: user.username };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
