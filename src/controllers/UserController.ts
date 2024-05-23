import { IUserController } from "@interfaces/controllers/IUserController";

import { UserEntity } from "@entities/UserEntity";

import { IUserService } from "@interfaces/services/IUserService";

import { Public } from "@controllers/AnonDecorator";

import { Body, Controller, Get, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiBody, ApiResponse } from "@nestjs/swagger";
import { CardTypeDto } from "@dto/CardTypeDto";
import { UserDto, UserPutDto } from "@dto/UserDto";

@Controller("user")
export class UserController implements IUserController {
    constructor(
        @Inject(IUserService)
        private readonly userService: IUserService
    ) {}

    @Public()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'The card type of the user',
        type: CardTypeDto,
    })
    @Get("card-type")
    async getCardType(@Param('userId') userId: number): Promise <CardTypeDto> {
        return this.userService.getCardType(userId).then(cardType => new CardTypeDto(cardType));
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: 'The user',
        type: UserDto,
    })
    @ApiBody({
        type: UserPutDto,
    })
    @Put(':id')
    async update(@Param('id') id: number, @Body() obj: Partial<UserEntity>): Promise<UserDto> {
        return this.userService.update(id, obj).then(user => new UserDto(user));
    }
}