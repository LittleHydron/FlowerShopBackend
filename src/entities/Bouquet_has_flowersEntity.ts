import { BouqueteEntity } from "@entities/BouqueteEntity";
import { FlowerEntity } from "@entities/FlowerEntity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Bouquet_has_flowers')
export class Bouquet_has_flowersEntity {
    @PrimaryGeneratedColumn()
    bouquet_has_flowersId: number;
    
    @Column()
    bouquetId: number;
    
    @Column()
    flowerId: number;
    
    @Column()
    quantity: number;
    
    @ManyToOne(() => BouqueteEntity, bouquete => bouquete.flower)
    bouquete: BouqueteEntity;
    
    @ManyToOne(() => FlowerEntity, flower => flower.bouquetes)
    flower: FlowerEntity;        
}