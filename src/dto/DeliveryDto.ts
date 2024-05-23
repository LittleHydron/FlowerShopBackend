import { DeliveryEntity } from "@entities/DeliveryEntity";
import { ApiProperty } from "@nestjs/swagger";

export class DeliveryDto {
    constructor(delivery: DeliveryEntity) {
        this.deliveryPrice = delivery.deliveryPrice;
    }

    @ApiProperty()
    deliveryPrice: number;
}