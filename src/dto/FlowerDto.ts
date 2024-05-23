import { FlowerEntity } from "@entities/FlowerEntity";

import { ApiProperty } from "@nestjs/swagger";

export class FlowerDto {
    constructor(flower: FlowerEntity) {
        this.name = flower.flowerName;
    }
    
    @ApiProperty()
    name: string;
}