import { BouqueteEntity } from "@entities/BouqueteEntity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('Packaging')
export class PackagingEntity {
    @PrimaryGeneratedColumn()
    packagingId: number;
    
    @Column()
    packagingPrice: number;

    @Column()
    packagingName: string;

    @OneToMany(() => BouqueteEntity, bouquete => bouquete.event)
    bouquetes: BouqueteEntity[];
}