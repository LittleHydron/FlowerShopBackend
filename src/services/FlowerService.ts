import { FlowerEntity } from "@entities/FlowerEntity";
import { IFlowerService } from "@interfaces/services/IFlowerService";
import { Injectable } from "@nestjs/common";

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class FlowerService implements IFlowerService {

    constructor(
        @InjectRepository(FlowerEntity)
        private readonly flowerRepository: Repository<FlowerEntity>
    ){}

    async getAll(): Promise<FlowerEntity[]> {
        return await this.flowerRepository.find();
    }

    async findOneById(id: number): Promise<FlowerEntity> {
        return await this.flowerRepository.findOneBy({ flowerId: id });
    }
}