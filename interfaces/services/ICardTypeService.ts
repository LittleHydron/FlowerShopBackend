import { CardTypeEntity } from "@entities/CardTypeEntity";

export interface ICardTypeService {
    getAll(): Promise<CardTypeEntity[]>;
    findOne(id: number): Promise<CardTypeEntity>;
}

export const ICardTypeService = Symbol("ICardTypeService");