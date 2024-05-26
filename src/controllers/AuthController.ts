import { IAuthController } from '@interfaces/controllers/IAuthController';

import { IAuthService } from '@interfaces/services/IAuthService';
import { IUserService } from '@interfaces/services/IUserService';
import { ICardTypeService } from '@interfaces/services/ICardTypeService';

import { Public } from '@controllers/AnonDecorator';
import { AuthGuard } from '@controllers/AuthGuard';

import { UserDto, UserLoginDto, UserRegisterDto } from '@dto/UserDto';

import { UserEntity } from '@entities/UserEntity';

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
import { DtoTransformer } from '@dto/DtoTransformer';

@Controller('auth')
export class AuthController implements IAuthController{
  constructor(
    @Inject(IAuthService)
    private authService: IAuthService,
    @Inject(ICardTypeService)
    private cardTypeService: ICardTypeService,
    @Inject(IUserService)
    private userService: IUserService
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
  async getProfile(@Request() req): Promise<UserDto> {
    const userEntity = await this.userService.findOneByUsername(req.user.username);
    console.log(userEntity);
    return DtoTransformer.UserEntityToUserDto(userEntity);
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