import { UserEntity } from "@entities/UserEntity";

import { CardTypeDto } from "@dto/CardTypeDto";

import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
    constructor(user: UserEntity) {
        this.name = user.name;
        this.surname = user.surname;
        this.username = user.username;
        this.cardType = user.cardType;
    }

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
    constructor(user: UserEntity) {
        console.log(user);
        this.name = user.name;
        this.surname = user.surname;
        this.username = user.username;
        this.cardTypeId = user.cardTypeId;
    }

    @ApiProperty()
    name: string;

    @ApiProperty()
    surname: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    cardTypeId: number;
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