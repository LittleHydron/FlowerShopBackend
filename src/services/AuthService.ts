import { IAuthService } from '@interfaces/services/IAuthService';

import { IUserService } from '@interfaces/services/IUserService';

import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService implements IAuthService{
  constructor(
    @Inject(IUserService)
    private usersService: IUserService,
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

  async register(user: Record<string, any>): Promise<{ accessToken: string }> {
    const newUser = await this.usersService.create(user);
    const payload = { sub: newUser.userId, username: newUser.username };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
