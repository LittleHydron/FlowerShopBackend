import { CardTypeDto } from "@dto/CardTypeDto";
import { UserDto, UserPutDto } from "@dto/UserDto";
import { UserEntity } from "@entities/UserEntity";

export interface IUserController {
    getCardType(userId: number): Promise <CardTypeDto>;
    update(id: number, obj: Partial<UserEntity>): Promise<UserPutDto>;
}