import { ApiProperty } from "@nestjs/swagger";

export class CardTypeDto {

    @ApiProperty()
    cardTypeId: number;

    @ApiProperty()
    cardType: string;

    @ApiProperty()
    discountOnBouquetes: number;

    @ApiProperty()
    discountOnDeliveries: number;
}