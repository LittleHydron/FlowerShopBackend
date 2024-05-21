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

import { IAuthService } from '@interfaces/services/IAuthService';

import { Public } from '@controllers/AnonDecorator';
import { AuthGuard } from '@controllers/AuthGuard';
import { ApiResponse } from '@nestjs/swagger';
import { UserEntity } from '@entities/UserEntity';
import { UserDto } from 'dto/UserDto';

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
  signIn(@Body() signInDto: Record<string, any> /* TODO: Replace with DTO */) {
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
}