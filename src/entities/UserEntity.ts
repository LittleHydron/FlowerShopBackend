import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CardTypeEntity } from "./CardTypeEntity";

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

    cardTypeId: number;

    @ManyToOne(() => CardTypeEntity, cardType => cardType.users)
    cardType: CardTypeEntity;
}