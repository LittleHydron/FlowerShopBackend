import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DeliveryEntity } from "./DeliveryEntity";
import { BouqueteEntity } from "./BouqueteEntity";
import { Order_has_BouquetesEntity } from "./Order_has_BouquetesEntity";

@Entity('Order')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    orderId: number;

    @Column()
    date: string;

    @ManyToOne(() => DeliveryEntity, delivery => delivery.orders)
    delivery: DeliveryEntity;

    @ManyToOne(() => Order_has_BouquetesEntity, bouquete => bouquete.order)
    bouquetes: BouqueteEntity[];
}