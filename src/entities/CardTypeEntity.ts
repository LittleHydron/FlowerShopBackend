import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "@entities/UserEntity";

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

    @Column()
    cardPrice: number;

    @OneToMany(() => UserEntity, user => user.cardType)
    users: UserEntity[];
}