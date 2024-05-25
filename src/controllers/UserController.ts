import { IUserController } from "@interfaces/controllers/IUserController";

import { UserEntity } from "@entities/UserEntity";

import { IUserService } from "@interfaces/services/IUserService";
import { ICardTypeService } from "@interfaces/services/ICardTypeService";

import { Public } from "@controllers/AnonDecorator";

import { CardTypeDto } from "@dto/CardTypeDto";
import { UserDto, UserPutDto } from "@dto/UserDto";

import { Body, Controller, Get, HttpStatus, Inject, Param, Put } from "@nestjs/common";
import { ApiBody, ApiResponse } from "@nestjs/swagger";

@Controller("user")
export class UserController implements IUserController {
    constructor(
        @Inject(IUserService)
        private readonly userService: IUserService,
        @Inject(ICardTypeService)
        private readonly cardTypeService: ICardTypeService
    ) {}

    @Public()
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'The card type of the user',
        type: CardTypeDto,
    })
    @Get("card-type")
    async getCardType(@Param('userId') userId: number): Promise <CardTypeDto> {
        const cardTypeId = await this.userService.getCardTypeId(userId);
        console.log("In Controller: " + cardTypeId);
        const cardType = await this.cardTypeService.findOne(cardTypeId);
        return new CardTypeDto(cardType);
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: 'The user',
        type: UserDto,
    })
    @ApiBody({
        type: UserPutDto,
    })
    @Public()
    @Put(':id')
    async update(@Param('id') id: number, @Body() obj: Partial<UserEntity>): Promise<UserPutDto> {
        const newUser = await this.userService.update(id, obj);
        const userPutDto = new UserPutDto(newUser);
        return userPutDto;
    }
}