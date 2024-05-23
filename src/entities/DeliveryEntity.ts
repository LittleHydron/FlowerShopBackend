import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./OrderEntity";

@Entity('Delivery')
export class DeliveryEntity {
    @PrimaryGeneratedColumn()
    deliveryId: number;
    
    @Column()
    deliveryPrice: number;

    @OneToMany(() => OrderEntity, order => order.delivery)
    orders: OrderEntity[];
}