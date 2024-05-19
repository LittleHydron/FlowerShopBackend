import { Injectable } from '@nestjs/common';

import { UserEntity } from '@entities/UserEntity';
import { IUsersService } from '@interfaces/services/IUsersService';

@Injectable()
export class UsersService implements IUsersService{
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
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOneByUsername(username: string): Promise<UserEntity | undefined> {
    return this.users.find(user => user.username === username);
  }
}