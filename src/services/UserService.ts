import { Injectable } from '@nestjs/common';

import { UserEntity } from '@entities/UserEntity';
import { IUserService } from '@interfaces/services/IUserService';

@Injectable()
export class UserService implements IUserService{
  create(obj: Partial<UserEntity>): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: number): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: number, changedObj: Partial<UserEntity>): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  remove(id: number): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  getCardType(userId: number): Promise<string> | string {
    return this.users.find(user => user.userId === userId).cardType;
  }
  private readonly users = [
    {
      userId: 1,
      name: 'John',
      surname: 'Doe',
      username: 'john',
      password: 'changeme',
      cardType: 'Simple',
    },
    {
      userId: 2,
      name: 'Maria',
      surname: 'Smith',
      username: 'maria',
      password: 'guess',
      cardType: 'Bonus1',
    },
  ];

  async findOneByUsername(username: string): Promise<UserEntity | undefined> {
    return this.users.find(user => user.username === username);
  }
}