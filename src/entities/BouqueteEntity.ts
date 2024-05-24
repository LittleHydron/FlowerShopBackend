import { EventEntity } from "@entities/EventEntity";
import { PackagingEntity } from "@entities/PackagingEntity";

import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FlowerEntity } from "./FlowerEntity";
import { OrderEntity } from "./OrderEntity";
import { Order_has_BouquetesEntity } from "./Order_has_BouquetesEntity";

@Entity('Bouquete')
export class BouqueteEntity {
    @PrimaryGeneratedColumn()
    bouqueteId: number;

    @ManyToOne(() => EventEntity, event => event.bouquetes)
    event: EventEntity;

    @ManyToOne(() => FlowerEntity, flower => flower.bouquetes)
    flower: FlowerEntity;

    @OneToMany(() => Order_has_BouquetesEntity, order => order.bouquete)
    orders: OrderEntity[];

    @Column()
    flowersQuantity: number;
}