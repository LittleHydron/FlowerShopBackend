import { IBouqueteController } from "@interfaces/controllers/IBouqueteController";

import { IBouqueteService } from "@interfaces/services/IBouqueteService";

import { Public } from "@controllers/AnonDecorator";

import { BouqueteCreateDto, BouqueteDto } from "@dto/BouqueteDto";
import { DtoTransformer } from "@dto/DtoTransformer";

import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";

@Controller("bouquete")
export class BouqueteController implements IBouqueteController{
    constructor(
        @Inject(IBouqueteService)
        private readonly bouqueteService: IBouqueteService
    ) {}

    @Public()
    @Get('all')
    async getAllBouquetes(): Promise<BouqueteDto[]> {
        const allBouquetes = await this.bouqueteService.getAll();
        return allBouquetes.map(bouquete => DtoTransformer.BouqueteEntityToBouqueteDto(bouquete));
    }

    @Public()
    @ApiBody({ type: BouqueteCreateDto })
    @Post('create')
    async createBouquete(@Body() bouquete: BouqueteCreateDto): Promise<BouqueteDto> {
        console.log(bouquete);
        const createdBouquete = await this.bouqueteService.create({...bouquete, event: "custom-bouquete"});
        return DtoTransformer.BouqueteEntityToBouqueteDto(createdBouquete);
    }
}