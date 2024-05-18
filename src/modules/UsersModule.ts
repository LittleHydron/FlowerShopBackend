import { IUsersService } from '@interfaces/services/IUsersService';

import { UsersService } from '@services/UsersService';

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [{
        provide: IUsersService,
        useClass: UsersService,
      }],
})
export class UsersModule {}
