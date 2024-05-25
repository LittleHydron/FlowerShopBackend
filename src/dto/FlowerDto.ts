import { ApiProperty } from "@nestjs/swagger";

export class FlowerDto {

    @ApiProperty()
    flowerId: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    flowerPrice: number;
}