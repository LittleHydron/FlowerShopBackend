import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Flower')
export class FlowerEntity {
    @PrimaryGeneratedColumn()
    flowerId: number;
    
    @Column()
    flowerName: string;
}