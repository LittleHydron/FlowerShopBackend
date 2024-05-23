import { CardTypeEntity } from "@entities/CardTypeEntity";
import { ApiProperty } from "@nestjs/swagger";

export class CardTypeDto {
    constructor(cardType: CardTypeEntity) {
        this.cardType = cardType.cardType;
    }
    @ApiProperty()
    cardType: string;

    @ApiProperty()
    discountOnBouquetes: number;

    @ApiProperty()
    discountOnDeliveries: number;

    @ApiProperty()
    cardPrice: number;
}