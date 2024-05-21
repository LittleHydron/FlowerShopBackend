import { AuthModule } from '@modules/AuthModule';
import { DatabaseModule } from '@modules/database/DatabaseModule';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './UsersModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../../constants/.env',
      isGlobal: true,
  }),
    AuthModule,
    UsersModule,
    // DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
