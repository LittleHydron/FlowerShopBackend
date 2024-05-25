import { CardTypeDto } from "@dto/CardTypeDto";

export interface ICardTypeController {

    getAll(): Promise<CardTypeDto[]>;

    getById(id: number): Promise<CardTypeDto>;
}