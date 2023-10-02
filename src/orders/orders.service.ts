import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderBalanceDto, CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UtilsService } from '../services/utils/utils.service';
import { ConfigModule } from '../services/config/config.module';
import { ConfigService } from '../services/config/config.service';
import { Order, OrderStatus } from './order.interface';
import { v4 as uuidv4 } from 'uuid';
import { NotFoundError } from 'rxjs';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];
  constructor(
    private readonly utilsService: UtilsService,
    private readonly configService: ConfigService,

    @Inject('DateService')
    private readonly DateService,
  ) {
    console.log(`Current env: ${configService.getAppConfig().env}`);
  }

  create(createDto: CreateOrderDto): Order {
    const id: string = uuidv4();
    const order = { ...createDto, status: OrderStatus.open, id };
    this.orders.push(order);
    return order;
  }

  findAll(): Order[] {
    return this.orders;
  }

  findOne(id: string): Order {
    const order = this.orders.find((order) => order.id === id);

    if (!order) throw new NotFoundError('Order not found');

    return order;
  }

  update(id: string, updateCartDto: UpdateOrderDto): Order {
    const orderForUpdate = this.orders.find((order) => order.id === id);

    if (!orderForUpdate) throw new NotFoundError('Order not found');

    orderForUpdate.status = updateCartDto.status;

    return orderForUpdate;
  }

  remove(id: string): boolean {
    const orderForDelete = this.orders.find((order) => order.id === id);

    if (!orderForDelete) throw new NotFoundError('Order not found');

    this.orders = this.orders.filter((order) => order.id !== id);

    return true;
  }
}
