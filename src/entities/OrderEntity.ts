import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DeliveryEntity } from "./DeliveryEntity";
import { BouqueteEntity } from "./BouqueteEntity";
import { Order_has_BouquetesEntity } from "./Order_has_BouquetesEntity";
import { UserEntity } from "./UserEntity";
import { PackagingEntity } from "./PackagingEntity";

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

    @ManyToOne(() => PackagingEntity, packaging => packaging.orders)
    packaging: PackagingEntity;
    
    @ManyToOne(() => UserEntity, user => user.orders)
    user: UserEntity;
}