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

  create(obj: CardTypeEntity): Promise<CardTypeEntity> {
    return this.cardTypesRepository.save(obj);
  }

  async findOne(id: number): Promise<CardTypeEntity> {
    console.log("In Card Type Service: " + id)
    return await this.cardTypesRepository.findOneBy({ cardTypeId: id });
  }
}