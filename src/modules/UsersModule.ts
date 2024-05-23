import { IUserService } from '@interfaces/services/IUserService';

import { UserService } from '@services/UserService';

import { UserController } from '@controllers/UserController';

import { UserEntity } from '@entities/UserEntity';
import { CardTypeEntity } from '@entities/CardTypeEntity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, CardTypeEntity])],
    controllers: [UserController],
    providers: [{
        provide: IUserService,
        useClass: UserService,
      }],
    exports: [IUserService],
})
export class UsersModule {}
