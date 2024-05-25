import { UserEntity } from '@entities/UserEntity';
import { CardTypeEntity } from '@entities/CardTypeEntity';

import { IUserService } from '@interfaces/services/IUserService';

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserPutDto } from '@dto/UserDto';

@Injectable()
export class UserService implements IUserService{
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  create(obj: UserEntity): Promise<UserEntity> {
    return this.usersRepository.save(obj);
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findOneBy({ userId: id });
    return user;
  }

  async update(id: number, changedObj: UserPutDto): Promise<UserEntity> {
    await this.usersRepository.update(id, changedObj);
    const newUser = await this.usersRepository.findOneBy({ userId: id });
    return newUser;
  }

  async getCardTypeId(userId: number): Promise<number> {
    const user = await this.usersRepository.findOneBy({ userId: userId});
    return user.cardTypeCardTypeId;
  }

  async findOneByUsername(username: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOneBy({ username: username });
  }
}