import { EventDto } from "@dto/EventDto";
import { FlowerDto } from "@dto/FlowerDto";

import { BouqueteEntity } from "@entities/BouqueteEntity";

import { ApiProperty } from "@nestjs/swagger";

export class BouqueteDto {

    constructor(bouquete: BouqueteEntity) {
        console.log(bouquete);
        this.event = new EventDto(bouquete.event);
        this.flower = new FlowerDto(bouquete.flower);
    }

    @ApiProperty()
    event: EventDto;

    @ApiProperty()
    flower: FlowerDto;
}

export class BouqueteCreateDto {

    @ApiProperty()
    eventId: number;

    @ApiProperty()
    flowerId: number;

    @ApiProperty()
    flowersQuantity: number;
}