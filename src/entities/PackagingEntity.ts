import { BouqueteEntity } from "@entities/BouqueteEntity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./OrderEntity";

@Entity('Packaging')
export class PackagingEntity {
    @PrimaryGeneratedColumn()
    packagingId: number;
    
    @Column()
    packagingPrice: number;

    @Column()
    packagingName: string;

    @OneToMany(() => OrderEntity, order => order.packaging)
    orders: OrderEntity[];
}