import { UserEntity } from "@entities/UserEntity";
import { IBaseController } from "@interfaces/controllers/IBaseController";

export interface IUserController extends IBaseController<UserEntity> {
    getCardType(userId: number): Promise <string> | string;
}