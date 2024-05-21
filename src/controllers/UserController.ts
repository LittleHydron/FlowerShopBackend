import { IUserController } from "@interfaces/controllers/IUserController";

import { UserEntity } from "@entities/UserEntity";

import { IUserService } from "@interfaces/services/IUserService";

import { Inject } from "@nestjs/common";

export class UserController implements IUserController {
    constructor(
        @Inject(IUserService)
        private readonly userService: IUserService
    ) {}

    getCardType(): Promise <string> {
        return this.userService.getCardType();
    }

    create(obj: Partial<UserEntity>): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    findAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

    findOne(id: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    update(id: string, obj: Partial<UserEntity>): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    remove(id: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
}