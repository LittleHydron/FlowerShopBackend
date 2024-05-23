import { BouqueteEntity } from "@entities/BouqueteEntity";
import { Bouquet_has_flowersEntity } from "entities/Bouquet_has_flowersEntity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Flower')
export class FlowerEntity {
    @PrimaryGeneratedColumn()
    flowerId: number;
    
    @Column()
    flowerName: string;

    @OneToMany(() => Bouquet_has_flowersEntity, bouquet_has_flowers => bouquet_has_flowers.flower)
    bouquetes: BouqueteEntity[];
}