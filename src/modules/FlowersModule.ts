import { IFlowerService } from '@interfaces/services/IFlowerService';

import { FlowerController } from '@controllers/FlowerController';
import { FlowerEntity } from '@entities/FlowerEntity';
import { FlowerService } from '@services/FlowerService';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([FlowerEntity])],
    controllers: [FlowerController],
    providers: [{
        provide: IFlowerService,
        useClass: FlowerService,
      }],
    exports: [IFlowerService],
})
export class FlowersModule {}
