import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Bouquete')
export class BouqueteEntity {

    @PrimaryGeneratedColumn()
    bouqueteId: number;

    @Column()
    name: string;
    
    @Column()
    event: string;
}