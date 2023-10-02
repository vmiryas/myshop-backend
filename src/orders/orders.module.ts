import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { UtilsModule } from '../services/utils/utils.module';

@Module({
  imports: [UtilsModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
