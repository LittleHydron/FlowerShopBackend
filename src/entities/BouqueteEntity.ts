import { EventEntity } from "@entities/EventEntity";
import { PackagingEntity } from "@entities/PackagingEntity";
import { Bouquet_has_flowersEntity } from "@entities/Bouquet_has_flowersEntity";

import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FlowerEntity } from "./FlowerEntity";
import { OrderEntity } from "./OrderEntity";
import { Order_has_BouquetesEntity } from "./Order_has_BouquetesEntity";

@Entity('Bouquete')
export class BouqueteEntity {
    @PrimaryGeneratedColumn()
    bouqueteId: number;
    
    @ManyToOne(() => EventEntity, event => event.bouquetes)
    event: EventEntity;

    @ManyToOne(() => PackagingEntity, packaging => packaging.bouquetes)
    packaging: PackagingEntity;

    @OneToMany(() => Bouquet_has_flowersEntity, bouquet_has_flowers => bouquet_has_flowers.bouquete)
    flowers: FlowerEntity[];

    @OneToMany(() => Order_has_BouquetesEntity, order => order.bouquete)
    orders: OrderEntity[];
}