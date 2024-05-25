import { IFlowerController } from "@interfaces/controllers/IFlowerController";

import { IFlowerService } from "@interfaces/services/IFlowerService";

import { Public } from "@controllers/AnonDecorator";

import { FlowerDto } from "@dto/FlowerDto";
import { DtoTransformer } from "@dto/DtoTransformer";

import { Controller, Get, Inject, Param } from "@nestjs/common";

@Controller('flowers')
export class FlowerController implements IFlowerController{
    
    constructor(
        @Inject(IFlowerService)
        private readonly flowerService: IFlowerService
    ) {}

    @Public()
    @Get('all')
    async getAll(): Promise<FlowerDto[]> {
        const flowers = await this.flowerService.getAll();
        return flowers.map(flower => DtoTransformer.FlowerEntityToFlowerDto(flower));
    }

    @Public()
    @Get(':id')
    async getById(@Param('id') id: number): Promise<FlowerDto> {
        const flower = await this.flowerService.findOneById(id);
        return DtoTransformer.FlowerEntityToFlowerDto(flower);
    }
}