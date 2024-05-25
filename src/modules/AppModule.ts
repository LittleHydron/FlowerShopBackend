import { AuthModule } from '@modules/AuthModule';
import { DatabaseModule } from '@modules/database/DatabaseModule';
import { UsersModule } from '@modules/UsersModule';
import { BouquetesModule } from '@modules/BouquetesModule';
import { FlowersModule } from '@modules/FlowersModule';
import { CardTypesModule } from '@modules/CardTypesModule';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

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
