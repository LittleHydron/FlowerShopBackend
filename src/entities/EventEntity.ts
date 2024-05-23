import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BouqueteEntity } from "@entities/BouqueteEntity";

@Entity('Event')
export class EventEntity {
    @PrimaryGeneratedColumn()
    eventId: number;
    
    @Column()
    eventName: string;

    @OneToMany(() => BouqueteEntity, bouquete => bouquete.event)
    bouquetes: BouqueteEntity[];
}