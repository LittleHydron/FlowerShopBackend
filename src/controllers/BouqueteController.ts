import { BouqueteCreateDto, BouqueteDto } from "@dto/BouqueteDto";
import { IBouqueteService } from "@interfaces/services/IBouqueteService";
import { Public } from "@controllers/AnonDecorator";

import { Body, Controller, Get, Inject, Post } from "@nestjs/common";

@Controller("bouquete")
export class BouqueteController {
    constructor(
        @Inject(IBouqueteService)
        private readonly bouqueteService: IBouqueteService
    ) {}

    @Public()
    @Post()
    async createBouquete(@Body() bouquete: BouqueteCreateDto) {
        const newBouquete = await this.bouqueteService.create(bouquete);
        return new BouqueteDto(newBouquete);
    }

    @Public()
    @Get('all')
    async getAllBouquetes(): Promise<BouqueteDto[]> {
        const allBouquetes = await this.bouqueteService.getAll();
        console.log(allBouquetes);
        return allBouquetes.map(bouquete => new BouqueteDto(bouquete));
    }
}