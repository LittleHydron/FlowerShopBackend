import { IAuthService } from '@interfaces/services/IAuthService';

import { UsersModule } from '@modules/UsersModule';

import { AuthService } from '@services/AuthService';

import { AuthController } from '@controllers/AuthController';

import { jwtConstants } from '@constants/jwtConstants';

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        UsersModule,
        JwtModule.registerAsync({
            useFactory: async () => ({
                secret: jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        }),
    ],
    providers: [{
        provide: IAuthService,
        useClass: AuthService,
    }],
    controllers: [AuthController],
})
export class AuthModule {}
