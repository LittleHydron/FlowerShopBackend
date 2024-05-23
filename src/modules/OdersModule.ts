import { BouqueteController } from '@controllers/BouqueteController';
import { OrderController } from '@controllers/OrderController';
import { Bouquet_has_flowersEntity } from '@entities/Bouquet_has_flowersEntity';
import { BouqueteEntity } from '@entities/BouqueteEntity';
import { FlowerEntity } from '@entities/FlowerEntity';
import { OrderEntity } from '@entities/OrderEntity';
import { Order_has_BouquetesEntity } from '@entities/Order_has_BouquetesEntity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([OrderEntity, Order_has_BouquetesEntity])],
    controllers: [OrderController],
    // providers: [{
    //     provide: IUserService,
    //     useClass: UserService,
    //   }],
    // exports: [IUserService],
})
export class OrdersModule {}
