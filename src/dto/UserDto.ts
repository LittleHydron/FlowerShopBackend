import { CardTypeDto } from "@dto/CardTypeDto";

import { ApiProperty } from "@nestjs/swagger";

export class UserDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    surname: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    cardType: CardTypeDto;
}

export class UserPutDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    surname: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    cardTypeCardTypeId: number;
}

export class UserLoginDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}

export class UserRegisterDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    surname: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    cardTypeId: number;
}