import { CardTypeEntity } from "@entities/CardTypeEntity";
import { UserEntity } from "@entities/UserEntity";

export interface IUserService {
  create(obj: Partial<UserEntity>): Promise<UserEntity> | UserEntity;

  findOne(id: number): Promise<UserEntity>;

  update(id: number, changedObj: Partial<UserEntity>): Promise<UserEntity> ;

  getCardTypeId(userId: number): Promise<number>;

  findOneByUsername(username: string): Promise<UserEntity | undefined>;
}

export const IUserService = Symbol("IUserService");