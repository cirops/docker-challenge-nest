import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller("orders")
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  create(@Body() body: { asset_id: string; price: number }) {
    return this.ordersService.create(body);
  }

  @Get()
  all() {
    return this.ordersService.all();
  }
}
