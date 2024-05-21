import { IUserService } from '@interfaces/services/IUserService';

import { UserService } from '@services/UserService';

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [{
        provide: IUserService,
        useClass: UserService,
      }],
    exports: [IUserService],
})
export class UsersModule {}
