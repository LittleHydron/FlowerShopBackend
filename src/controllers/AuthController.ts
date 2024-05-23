import { IAuthService } from '@interfaces/services/IAuthService';

import { Public } from '@controllers/AnonDecorator';
import { AuthGuard } from '@controllers/AuthGuard';

import { UserDto, UserLoginDto, UserRegisterDto } from '@dto/UserDto';


import { ApiResponse } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(IAuthService)
    private authService: IAuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Sign in',
    type: String,
  })
  @Post('login')
  signIn(@Body() signInDto: UserLoginDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get profile',
    type: UserDto,
  })
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Register',
    type: UserDto,
  })
  async register(@Body() user: UserRegisterDto) {
    return this.authService.register(user);
  }
}