import { IBaseService } from "@interfaces/services/IBaseSevice";

import { UserEntity } from "@entities/UserEntity";

export interface IUsersService extends IBaseService <UserEntity>{
    findOneByUsername(username: string): Promise<UserEntity | undefined>;
}

export const IUsersService = Symbol("IUsersService");