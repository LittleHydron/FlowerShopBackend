import { IAuthService } from '@interfaces/services/IAuthService';

import { UsersService } from '@services/UsersService';

import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService implements IAuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }
}
