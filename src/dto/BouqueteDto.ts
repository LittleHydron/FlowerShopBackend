import { ApiProperty } from "@nestjs/swagger";

export class BouqueteDto {

    @ApiProperty()
    bouqueteId: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    event: string;
}

export class BouqueteCreateDto {

    @ApiProperty()
    name: string;
}