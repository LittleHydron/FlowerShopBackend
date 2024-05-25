import { IBouqueteService } from "@interfaces/services/IBouqueteService";

import { BouqueteEntity } from "@entities/BouqueteEntity";

import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BouqueteService implements IBouqueteService{
    
    constructor(
        @InjectRepository(BouqueteEntity)
        private readonly bouqueteRepository: Repository<BouqueteEntity>
    ){}

    async getAll(): Promise<BouqueteEntity[]> {
        return await this.bouqueteRepository.find();
    }
}