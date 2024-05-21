import { UserEntity } from "@entities/UserEntity";
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
    cardType: string;
}