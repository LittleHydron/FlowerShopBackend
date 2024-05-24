import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BouqueteController } from '@controllers/BouqueteController';
import { BouqueteEntity } from '@entities/BouqueteEntity';
import { EventEntity } from '@entities/EventEntity';
import { PackagingEntity } from '@entities/PackagingEntity';
import { FlowerEntity } from '@entities/FlowerEntity';
import { Bouquet_has_flowersEntity } from '@entities/Bouquet_has_flowersEntity';
import { Order_has_BouquetesEntity } from '@entities/Order_has_BouquetesEntity';
import { OrderEntity } from '@entities/OrderEntity';
import { DeliveryEntity } from '@entities/DeliveryEntity';
import { IBouqueteService } from '@interfaces/services/IBouqueteService';
import { BouqueteService } from '@services/BouqueteService';

@Module({
    imports: [TypeOrmModule.forFeature([
        BouqueteEntity,
        EventEntity,
        PackagingEntity,
        FlowerEntity,
        Bouquet_has_flowersEntity,
        Order_has_BouquetesEntity,
        OrderEntity,
        DeliveryEntity
    ])],
    controllers: [BouqueteController],
    providers: [{
        provide: IBouqueteService,
        useClass: BouqueteService,
      }],
    exports: [IBouqueteService],
})
export class BouquetesModule {}
