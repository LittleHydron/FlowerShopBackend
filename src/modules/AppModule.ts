import { AuthModule } from '@modules/AuthModule';
import { DatabaseModule } from '@modules/database/DatabaseModule';
import { UsersModule } from '@modules/UsersModule';
import { BouquetesModule } from '@modules/BouquetesModule';
import { OrdersModule } from '@modules/OdersModule';

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
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
