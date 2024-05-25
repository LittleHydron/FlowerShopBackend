import { BouqueteEntity } from "@entities/BouqueteEntity";

import { ApiProperty } from "@nestjs/swagger";

export class BouqueteDto {

    constructor(bouquete: BouqueteEntity) {
        this.bouqueteId = bouquete.bouqueteId;
        this.name = bouquete.name;
        this.event = bouquete.event;
    }

    @ApiProperty()
    bouqueteId: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    event: string;
}

export class BouqueteCreateDto {

    @ApiProperty()
    bouqueteId: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    event: string;
}