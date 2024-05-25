import { FlowerEntity } from "@entities/FlowerEntity";

import { ApiProperty } from "@nestjs/swagger";

export class FlowerDto {
    constructor(flower: FlowerEntity) {
        this.flowerId = flower.flowerId;
        this.name = flower.flowerName;
    }

    @ApiProperty()
    flowerId: number;
    
    @ApiProperty()
    name: string;
}