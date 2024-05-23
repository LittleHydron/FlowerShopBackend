import { ApiProperty } from "@nestjs/swagger";
import { BouqueteDto } from "./BouqueteDto";
import { OrderEntity } from "@entities/OrderEntity";
import { DeliveryDto } from "./DeliveryDto";

export class OrderDto{
    constructor(order: OrderEntity) {
        this.delivery = new DeliveryDto(order.delivery);
        this.date = order.date;
        this.bouquetes = order.bouquetes.map(bouquete => new BouqueteDto(bouquete));
    }
    
    @ApiProperty()
    date: string;

    @ApiProperty()
    delivery: DeliveryDto;

    @ApiProperty()
    bouquetes: BouqueteDto[];
}

export class OrderCreateDto{
    constructor(order: OrderEntity) {
        this.deliveryId = order.delivery.deliveryId;
        this.date = order.date;
        this.bouqueteIds = order.bouquetes.map(bouquete => bouquete.bouqueteId);
    }
    
    @ApiProperty()
    date: string;

    @ApiProperty()
    deliveryId: number;

    @ApiProperty()
    bouqueteIds: number[];
}