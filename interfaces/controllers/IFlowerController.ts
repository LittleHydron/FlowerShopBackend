import { FlowerDto } from "@dto/FlowerDto";

export interface IFlowerController {

    getAll(): Promise<FlowerDto[]>;

    getById(id: number): Promise<FlowerDto>;
}