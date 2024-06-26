import { ICardTypeController } from "@interfaces/controllers/ICardTypeController";

import { ICardTypeService } from "@interfaces/services/ICardTypeService";

import { Public } from "@controllers/AnonDecorator";

import { CardTypeDto } from "@dto/CardTypeDto";
import { DtoTransformer } from "@dto/DtoTransformer";

import { Controller, Get, Inject, Param } from "@nestjs/common";


@Controller('card-types')
export class CardTypeController implements ICardTypeController{
    constructor(
        @Inject(ICardTypeService)
        private readonly cardTypeService: ICardTypeService
    ){}

    @Public()
    @Get('all')
    async getAll(): Promise<CardTypeDto[]> {
        const cardTypes = await this.cardTypeService.getAll();
        return cardTypes.map(cardType => DtoTransformer.CardTypeEntityToCardTypeDto(cardType));
    }

    @Public()
    @Get(':id')
    async getById(@Param('id') id: number): Promise<CardTypeDto> {
        const cardType = await this.cardTypeService.findOne(id);
        return DtoTransformer.CardTypeEntityToCardTypeDto(cardType);
    }
}