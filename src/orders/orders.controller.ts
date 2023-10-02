import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderBalanceDto, CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { TransformPipe } from './pipes/transform.pipe';
import { ValidationPipe } from './pipes/validation.pipe';
import { SkipAuth } from '../guards/skip-auth.decorator';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @SkipAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    const order = this.ordersService.findOne(id);
    return order;
  }

  @SkipAuth()
  @Post()
  create(
    // @Body(TransformPipe, ValidationPipe) createCartDto: CreateOrderDto,
    @Body() createOrdertDto: CreateOrderDto,
  ) {
    const order = this.ordersService.create(createOrdertDto);
    // console.log('created order: ', order)
    return order;
  }

  @SkipAuth()
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateOrderDto) {
    console.log('\n update order: ', updateCartDto);
    return this.ordersService.update(id, updateCartDto);
  }

  @SkipAuth()
  @Get()
  findAll() {
    const orders = this.ordersService.findAll();
    return orders;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id);
  }
}
