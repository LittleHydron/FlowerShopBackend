import { IBouqueteService } from "@interfaces/services/IBouqueteService";
import { Public } from "@controllers/AnonDecorator";
import { BouqueteDto } from "@dto/BouqueteDto";

import { Controller, Get, Inject } from "@nestjs/common";

@Controller("bouquete")
export class BouqueteController {
    constructor(
        @Inject(IBouqueteService)
        private readonly bouqueteService: IBouqueteService
    ) {}

    @Public()
    @Get('all')
    async getAllBouquetes(): Promise<BouqueteDto[]> {
        const allBouquetes = await this.bouqueteService.getAll();
        return allBouquetes.map(bouquete => new BouqueteDto(bouquete));
    }
}