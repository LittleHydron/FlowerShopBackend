import { CardTypeEntity } from '@entities/CardTypeEntity';

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CardTypeService {
  constructor(
    @InjectRepository(CardTypeEntity)
    private readonly cardTypesRepository: Repository<CardTypeEntity>,
  ) {}

  async findOne(id: number): Promise<CardTypeEntity> {
    console.log('CardTypeService.findOne ', id);
    return await this.cardTypesRepository.findOneBy({ cardTypeId: id });
  }

  async getAll(): Promise<CardTypeEntity[]> {
    return await this.cardTypesRepository.find();
  }
}