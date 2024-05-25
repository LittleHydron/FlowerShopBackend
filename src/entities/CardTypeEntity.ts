import { UserEntity } from "@entities/UserEntity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('CardType')
export class CardTypeEntity {

    constructor(cardType: Partial<CardTypeEntity>) {
        Object.assign(this, cardType);
    }

    @PrimaryGeneratedColumn()
    cardTypeId: number;

    @Column()
    cardType: string;

    @Column()
    discountOnBouquetes: number;

    @Column()
    discountOnDeliveries: number;

    @OneToMany(() => UserEntity, user => user.cardType)
    users: UserEntity[];
}