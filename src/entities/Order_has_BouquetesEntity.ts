import { BouqueteEntity } from "@entities/BouqueteEntity";
import { OrderEntity } from "@entities/OrderEntity";

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Order_has_Bouquetes')
export class Order_has_BouquetesEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    bouquetId: number;
    
    @Column()
    quantity: number;
    
    @ManyToOne(() => BouqueteEntity, bouquete => bouquete.orders)
    bouquete: BouqueteEntity;

    @ManyToOne(() => OrderEntity, order => order.bouquetes)
    order: OrderEntity;
}