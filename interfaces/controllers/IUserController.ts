import { CardTypeDto } from "@dto/CardTypeDto";
import { UserDto } from "@dto/UserDto";
import { UserEntity } from "@entities/UserEntity";

export interface IUserController {
    getCardType(userId: number): Promise <CardTypeDto>;
    update(id: number, obj: Partial<UserEntity>): Promise<UserDto>;
}