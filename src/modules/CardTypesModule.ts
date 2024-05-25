import { ICardTypeService } from '@interfaces/services/ICardTypeService';
import { CardTypeService } from '@services/CardTypeService';
import { CardTypeController } from '@controllers/CardTypeController';
import { CardTypeEntity } from '@entities/CardTypeEntity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([CardTypeEntity])],
    controllers: [CardTypeController],
    providers: [{
        provide: ICardTypeService,
        useClass: CardTypeService,
      }],
    exports: [ICardTypeService],
})
export class CardTypesModule {}
