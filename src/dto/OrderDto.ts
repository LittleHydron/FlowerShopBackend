import { ApiProperty } from "@nestjs/swagger";
import { BouqueteDto } from "./BouqueteDto";
import { OrderEntity } from "@entities/OrderEntity";
import { DeliveryDto } from "./DeliveryDto";
import { PackagingDto } from "./PackagingDto";

export class OrderDto{
    constructor(order: OrderEntity) {
        this.delivery = new DeliveryDto(order.delivery);
        this.date = order.date;
        this.bouquetes = order.bouquetes.map(bouquete => new BouqueteDto(bouquete));
        this.packaging = new PackagingDto(order.packaging);
    }
    
    @ApiProperty()
    date: string;

    @ApiProperty()
    delivery: DeliveryDto;

    @ApiProperty()
    bouquetes: BouqueteDto[];

    @ApiProperty()
    packaging: PackagingDto;
}

export class OrderCreateDto{

    @ApiProperty()
    date: string;

    @ApiProperty()
    deliveryId: number;

    @ApiProperty()
    bouqueteIds: number[];

    @ApiProperty()
    packagingId: number;
}