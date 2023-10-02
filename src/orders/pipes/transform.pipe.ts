import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { CreateOrderBalanceDto, CreateOrderBalanceDtoValid } from '../dto/create-order.dto';

@Injectable()
export class TransformPipe implements PipeTransform {
  transform(
    value: CreateOrderBalanceDto,
    metadata: ArgumentMetadata,
  ): CreateOrderBalanceDtoValid {
    return {
      balance: +value.balance || 0,
      currency: value.currency.toUpperCase(),
    };
  }
}
