import { UsersModule } from '@modules/UsersModule';

import { AuthService } from '@services/AuthService';

import { AuthController } from '@controllers/AuthController';

import { Module } from '@nestjs/common';

@Module({
    imports: [UsersModule],
    providers: [AuthService],
    controllers: [AuthController],
  })
  export class AuthModule {}
