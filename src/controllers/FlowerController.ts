import { FlowerDto } from "@dto/FlowerDto";
import { IFlowerService } from "@interfaces/services/IFlowerService";
import { Controller, Get, Inject, Param } from "@nestjs/common";
import { Public } from "@controllers/AnonDecorator";
import { ApiParam } from "@nestjs/swagger";

@Controller('flowers')
export class FlowerController {
    
    constructor(
        @Inject(IFlowerService)
        private readonly flowerService: IFlowerService
    ) {}

    @Public()
    @Get('all')
    async getAll() {
        const flowers = await this.flowerService.getAll();
        return flowers.map(flower => new FlowerDto(flower));
    }

    @Public()
    @Get(':id')
    async getById(@Param('id') id: number): Promise<FlowerDto> {
        const flower = await this.flowerService.findOneById(id);
        return new FlowerDto(flower);
    }
}