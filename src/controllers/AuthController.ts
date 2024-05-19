import { IAuthService } from '@interfaces/services/IAuthService';

import { Body, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(IAuthService)
    private authService: IAuthService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any> /*TODO: replace with DTO*/) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
