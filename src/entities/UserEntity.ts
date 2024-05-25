import { CardTypeEntity } from "@entities/CardTypeEntity";

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class UserEntity {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    cardTypeCardTypeId: number;

    @ManyToOne(() => CardTypeEntity, cardType => cardType.users)
    cardType: CardTypeEntity;
}