import { UserEntity } from '@entities/UserEntity';
import { CardTypeEntity } from '@entities/CardTypeEntity';

import { IUserService } from '@interfaces/services/IUserService';

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class UserService implements IUserService{
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  create(obj: UserEntity): Promise<UserEntity> {
    return this.usersRepository.save(obj);
  }

  findOne(id: number): Promise<UserEntity> {
    return this.usersRepository.findOneById(id);
  }

  update(id: number, changedObj: Partial<UserEntity>): Promise<UserEntity> {
    return this.usersRepository.save({ ...changedObj, userId: id });
  }

  getCardType(userId: number): Promise<CardTypeEntity> {
    return this.usersRepository.findOneById(userId).then(user => user.cardType);
  }

  async findOneByUsername(username: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOneBy({ username });
  }
}