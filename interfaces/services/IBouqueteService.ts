import { BouqueteEntity } from "@entities/BouqueteEntity";

export interface IBouqueteService {
    getAll(): Promise<BouqueteEntity[]>;
    create(bouquete: Partial<BouqueteEntity>): Promise<BouqueteEntity>;
}

export const IBouqueteService = Symbol("IBouqueteService");