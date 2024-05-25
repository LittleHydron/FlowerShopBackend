import { AuthModule } from '@modules/AuthModule';
import { DatabaseModule } from '@modules/database/DatabaseModule';
import { UsersModule } from '@modules/UsersModule';
import { BouquetesModule } from '@modules/BouquetesModule';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlowersModule } from './FlowersModule';
import { CardTypesModule } from './CardTypesModule';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
  }),
    AuthModule,
    UsersModule,
    BouquetesModule,
    DatabaseModule,
    FlowersModule,
    CardTypesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
