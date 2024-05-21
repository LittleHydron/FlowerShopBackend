import { IBaseService } from "@interfaces/services/IBaseSevice";

import { UserEntity } from "@entities/UserEntity";

export interface IUserService extends IBaseService <UserEntity>{
    findOneByUsername(username: string): Promise<UserEntity | undefined>;
    getCardType(userId: number): Promise<string> | string;
}

export const IUserService = Symbol("IUserService");