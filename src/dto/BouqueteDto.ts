import { EventDto } from "@dto/EventDto";
import { FlowerDto } from "@dto/FlowerDto";

import { BouqueteEntity } from "@entities/BouqueteEntity";

import { ApiProperty } from "@nestjs/swagger";

export class BouqueteDto {

    constructor(bouquete: BouqueteEntity) {
        this.event = new EventDto(bouquete.event);
        this.flowers = bouquete.flowers.map(flower => new FlowerDto(flower));
    }

    @ApiProperty()
    event: EventDto;

    @ApiProperty()
    flowers: FlowerDto[];
}

export class BouqueteCreateDto {

    @ApiProperty()
    eventId: number;

    @ApiProperty()
    flowerIds: number[];

    @ApiProperty()
    flowersQuantities: number[];
}