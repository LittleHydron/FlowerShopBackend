import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CardTypeEntity } from "./CardTypeEntity";
import { OrderEntity } from "./OrderEntity";

@Entity('User')
export class UserEntity {

    constructor(user: Partial<UserEntity>) {
        Object.assign(this, user);
    }

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
    cardTypeId: number;

    @ManyToOne(() => CardTypeEntity, cardType => cardType.users)
    cardType: CardTypeEntity;

    @ManyToOne(() => OrderEntity, order => order.user)
    orders: OrderEntity[];
}