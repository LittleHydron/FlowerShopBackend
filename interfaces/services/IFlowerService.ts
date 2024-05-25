import { FlowerEntity } from "@entities/FlowerEntity";

export interface IFlowerService {
    getAll(): Promise<FlowerEntity[]>;
    findOneById(id: number): Promise<FlowerEntity>;
}

export const IFlowerService = Symbol("IFlowerService");