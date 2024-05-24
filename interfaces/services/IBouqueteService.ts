import { BouqueteEntity } from "@entities/BouqueteEntity";

export interface IBouqueteService {
    getAll(): Promise<BouqueteEntity[]>;
    create(bouquete: any): Promise<BouqueteEntity>;
}

export const IBouqueteService = Symbol("IBouqueteService");