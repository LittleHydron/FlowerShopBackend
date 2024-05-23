import { OrderCreateDto } from "@dto/OrderDto";
import { Body, Controller, Post } from "@nestjs/common";

@Controller("order")
export class OrderController {

    @Post()
    createOrder(@Body() order: OrderCreateDto) {
    }
}