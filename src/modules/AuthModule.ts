import { IAuthService } from '@interfaces/services/IAuthService';
import { ICardTypeService } from '@interfaces/services/ICardTypeService';

import { UsersModule } from '@modules/UsersModule';

import { AuthService } from '@services/AuthService';
import { CardTypeService } from '@services/CardTypeService';

import { AuthController } from '@controllers/AuthController';
import { AuthGuard } from '@controllers/AuthGuard';

import { jwtConstants } from '@constants/jwtConstants';

import { UserEntity } from '@entities/UserEntity';
import { CardTypeEntity } from '@entities/CardTypeEntity';

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, CardTypeEntity]),
        UsersModule,
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        }),
    ],
    providers: [
        {
            provide: IAuthService,
            useClass: AuthService,
        },
        {
            provide: ICardTypeService,
            useClass: CardTypeService,
        },
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        }
    ],
    controllers: [AuthController],
})
export class AuthModule {}
