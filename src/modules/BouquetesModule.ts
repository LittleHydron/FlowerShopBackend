import { BouqueteController } from '@controllers/BouqueteController';
import { BouqueteEntity } from '@entities/BouqueteEntity';
import { IBouqueteService } from '@interfaces/services/IBouqueteService';
import { BouqueteService } from '@services/BouqueteService';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([
        BouqueteEntity
    ])],
    controllers: [BouqueteController],
    providers: [{
        provide: IBouqueteService,
        useClass: BouqueteService,
    }],
    exports: [IBouqueteService],
})
export class BouquetesModule {}
