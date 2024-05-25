import { CardTypeEntity } from "@entities/CardTypeEntity";
import { ApiProperty } from "@nestjs/swagger";

export class CardTypeDto {
    constructor(cardType: CardTypeEntity) {
        this.cardTypeId = cardType.cardTypeId;
        this.cardType = cardType.cardType;
        this.discountOnBouquetes = cardType.discountOnBouquetes;
        this.discountOnDeliveries = cardType.discountOnDeliveries;
    }

    @ApiProperty()
    cardTypeId: number;

    @ApiProperty()
    cardType: string;

    @ApiProperty()
    discountOnBouquetes: number;

    @ApiProperty()
    discountOnDeliveries: number;
}