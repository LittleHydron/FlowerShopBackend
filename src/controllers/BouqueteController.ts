import { BouqueteCreateDto } from "@dto/BouqueteDto";
import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller("bouquete")
export class BouqueteController {
    constructor(

    ) {}

    @Post()
    createBouquete(@Body() bouquete: BouqueteCreateDto) {
    }

    @Get('all')
    getAllBouquetes() {
    }
}