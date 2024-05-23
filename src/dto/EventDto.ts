import { EventEntity } from "@entities/EventEntity";
import { ApiProperty } from "@nestjs/swagger";

export class EventDto {
    constructor(event: EventEntity) {
        this.name = event.eventName;
    }

    @ApiProperty()
    name: string;
}