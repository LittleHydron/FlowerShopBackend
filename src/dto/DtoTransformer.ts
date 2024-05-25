import { UserDto, UserPutDto } from "@dto/UserDto";
import { CardTypeDto } from "@dto/CardTypeDto";
import { BouqueteDto } from "@dto/BouqueteDto";
import { FlowerDto } from "@dto/FlowerDto";

import { UserEntity } from "@entities/UserEntity";
import { CardTypeEntity } from "@entities/CardTypeEntity";
import { BouqueteEntity } from "@entities/BouqueteEntity";
import { FlowerEntity } from "@entities/FlowerEntity";

export class DtoTransformer {

    static CardTypeEntityToCardTypeDto(cardType: CardTypeEntity): CardTypeDto {
        let dto = new CardTypeDto();
        dto.cardTypeId = cardType.cardTypeId;
        dto.cardType = cardType.cardType;
        dto.discountOnBouquetes = cardType.discountOnBouquetes;
        dto.discountOnDeliveries = cardType.discountOnDeliveries;
        return dto;
    }

    static UserEntityToUserDto(user: UserEntity): UserDto {
        let dto = new UserDto();
        dto.name = user.name;
        dto.surname = user.surname;
        dto.username = user.username;
        dto.cardType = this.CardTypeEntityToCardTypeDto(user.cardType);
        return dto;
    }

    static UserEntityToUserPutDto(user: UserEntity): UserPutDto {
        let dto = new UserPutDto();
        dto.name = user.name;
        dto.surname = user.surname;
        dto.username = user.username;
        dto.cardTypeCardTypeId = user.cardTypeCardTypeId;
        return dto;
    }

    static BouqueteEntityToBouqueteDto(bouquete: BouqueteEntity): BouqueteDto {
        let dto = new BouqueteDto();
        dto.bouqueteId = bouquete.bouqueteId;
        dto.name = bouquete.name;
        dto.event = bouquete.event;
        return dto;
    }

    static FlowerEntityToFlowerDto(flower: FlowerEntity): FlowerDto {
        let dto = new FlowerDto();
        dto.flowerId = flower.flowerId;
        dto.name = flower.flowerName;
        dto.flowerPrice = flower.flowerPrice;
        return dto;
    }
}