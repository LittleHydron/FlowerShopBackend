import { IBouqueteService } from "@interfaces/services/IBouqueteService";

import { BouqueteEntity } from "@entities/BouqueteEntity";

import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

export class BouqueteService implements IBouqueteService{
    
    constructor(
        @InjectRepository(BouqueteEntity)
        private readonly bouqueteRepository: Repository<BouqueteEntity>
    ){}

    async getAll(): Promise<BouqueteEntity[]> {
        return await this.bouqueteRepository.find({
            relations: ['event', 'flowers']
        });
    }

    async create(bouquete: any): Promise<BouqueteEntity> {
        return await this.bouqueteRepository.save(bouquete);
    }
}