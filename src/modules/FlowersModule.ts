import { BouqueteController } from '@controllers/BouqueteController';
import { Bouquet_has_flowersEntity } from '@entities/Bouquet_has_flowersEntity';
import { BouqueteEntity } from '@entities/BouqueteEntity';
import { FlowerEntity } from '@entities/FlowerEntity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([BouqueteEntity, FlowerEntity, Bouquet_has_flowersEntity])],
    controllers: [BouqueteController],
    // providers: [{
    //     provide: IUserService,
    //     useClass: UserService,
    //   }],
    // exports: [IUserService],
})
export class FlowersModule {}
