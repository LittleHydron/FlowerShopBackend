import { IUserController } from "@interfaces/controllers/IUserController";

import { UserEntity } from "@entities/UserEntity";

import { IUserService } from "@interfaces/services/IUserService";

import { Controller, Get, Inject, Param } from "@nestjs/common";

@Controller("user")
export class UserController implements IUserController {
    constructor(
        @Inject(IUserService)
        private readonly userService: IUserService
    ) {}

    @Get("card-type")
    getCardType(@Param('userId') userId: number): Promise <string> | string {
        return this.userService.getCardType(userId);
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