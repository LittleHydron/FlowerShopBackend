import { PackagingEntity } from "@entities/PackagingEntity";
import { ApiProperty } from "@nestjs/swagger";

export class PackagingDto {
    
    constructor(packaging: PackagingEntity) {
        this.packagingPrice = packaging.packagingPrice;
        this.packagingName = packaging.packagingName;
    }
    
    @ApiProperty()
    packagingPrice: number;

    @ApiProperty()
    packagingName: string;
}