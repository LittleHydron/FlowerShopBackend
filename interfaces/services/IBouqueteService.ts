import { BouqueteEntity } from "@entities/BouqueteEntity";

export interface IBouqueteService {
    getAll(): Promise<BouqueteEntity[]>;
}

export const IBouqueteService = Symbol("IBouqueteService");