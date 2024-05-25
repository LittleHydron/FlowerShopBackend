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
import { UserEntity } from '@entities/UserEntity';
import { ICardTypeService } from '@interfaces/services/ICardTypeService';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(IAuthService)
    private authService: IAuthService,
    @Inject(ICardTypeService)
    private cardTypeService: ICardTypeService
  ) {}

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
    const userEntity = new UserEntity();
    userEntity.name = user.name;
    userEntity.surname = user.surname;
    userEntity.username = user.username;
    userEntity.password = user.password;
    userEntity.cardType = await this.cardTypeService.findOne(user.cardTypeId);
    return this.authService.register(userEntity);
  }
}