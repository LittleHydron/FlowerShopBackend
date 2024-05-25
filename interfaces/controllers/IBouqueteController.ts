import { BouqueteDto } from "@dto/BouqueteDto";

export interface IBouqueteController {
    
    getAllBouquetes(): Promise<BouqueteDto[]>;
}